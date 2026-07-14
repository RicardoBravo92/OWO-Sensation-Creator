export function parseOwoFile(content) {
  const lines = content.trim().split(/\r?\n/);
  const sensations = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const sensation = parseSensationLine(trimmed);
    if (sensation) {
      sensations.push(sensation);
    }
  }

  return sensations;
}

function parseSensationLine(line) {
  const parts = line.split('~').filter((p, i, arr) => !(i === arr.length - 1 && p === ''));
  if (parts.length < 4) return null;

  const id = parseInt(parts[0]);
  const name = parts[1].trim();

  const hasEndMarker = parts[parts.length - 1] === '#';
  let icon, group;
  if (hasEndMarker) {
    group = parts[parts.length - 2];
    icon = parts[parts.length - 3];
  } else {
    group = parts[parts.length - 1];
    icon = parts[parts.length - 2];
  }

  const iconIndex = hasEndMarker ? parts.length - 3 : parts.length - 2;
  const middleParts = parts.slice(2, iconIndex);
  const combinedField = middleParts.join('~');

  // Find where global params end and blocks begin
  const firstPipe = combinedField.indexOf('|');
  const firstAmpersand = combinedField.indexOf('&');

  let globalParamsStr = combinedField;
  let blockSection = '';

  if (firstPipe > -1 || firstAmpersand > -1) {
    const commas = [];
    for (let i = 0; i < combinedField.length; i++) {
      if (combinedField[i] === ',') commas.push(i);
    }
    if (commas.length >= 6) {
      globalParamsStr = combinedField.substring(0, commas[5]);
      blockSection = combinedField.substring(commas[5] + 1);
    }
  } else {
    // No pipe and no ampersand - check if there's content after 6th comma
    const commas = [];
    for (let i = 0; i < combinedField.length; i++) {
      if (combinedField[i] === ',') commas.push(i);
    }
    if (commas.length >= 6) {
      globalParamsStr = combinedField.substring(0, commas[5]);
      blockSection = combinedField.substring(commas[5] + 1);
    }
  }

  const globalParams = globalParamsStr.split(',').map(Number);

  const blocks = parseBlocks(blockSection);

  return {
    id,
    name,
    frequency: globalParams[0] || 100,
    duration: globalParams[1] || 1,
    intensity: globalParams[2] || 100,
    rampUp: globalParams[3] || 0,
    rampDown: globalParams[4] || 0,
    exitTime: globalParams[5] || 0,
    blocks,
    icon: icon || 'impact-0',
    group: group || 'Default',
  };
}

function parseBlocks(blockSection) {
  if (!blockSection) return [];

  const blocks = blockSection.split('&');
  const result = [];
  let delay = 0;

  for (const block of blocks) {
    const trimmed = block.replace(/^\|/, '').replace(/^\,/, '');
    if (!trimmed) continue;

    const pipeIndex = trimmed.indexOf('|');
    let blockName = '';
    let sensorStr = '';
    let blockParams = null;

    if (pipeIndex > -1) {
      const beforePipe = trimmed.substring(0, pipeIndex);
      sensorStr = trimmed.substring(pipeIndex + 1);

      const parts = beforePipe.split(',');
      const nums = [];
      let nameStart = 0;

      for (let i = 0; i < parts.length; i++) {
        const n = parseInt(parts[i]);
        if (!isNaN(n) && nums.length < 6) {
          nums.push(n);
          nameStart = i + 1;
        } else {
          break;
        }
      }

      if (nums.length === 6) {
        blockParams = {
          frequency: nums[0],
          duration: nums[1],
          intensity: nums[2],
          rampUp: nums[3],
          rampDown: nums[4],
          exitTime: nums[5],
        };
        blockName = parts.slice(nameStart).join(',').trim();
      } else {
        blockName = beforePipe.trim();
      }
    } else {
      // No pipe - could be just a name (like "Hit") or sensors
      const parts = trimmed.split(',');
      const nums = [];
      let nameStart = 0;

      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes('%')) break;
        const n = parseInt(parts[i]);
        if (!isNaN(n) && nums.length < 6) {
          nums.push(n);
          nameStart = i + 1;
        } else {
          break;
        }
      }

      if (nums.length === 6) {
        blockParams = {
          frequency: nums[0],
          duration: nums[1],
          intensity: nums[2],
          rampUp: nums[3],
          rampDown: nums[4],
          exitTime: nums[5],
        };
        blockName = parts.slice(nameStart).join(',').trim();
      } else {
        // Just a name like "Hit" or just sensors
        if (trimmed.includes('%')) {
          sensorStr = trimmed;
        } else {
          blockName = trimmed.trim();
        }
      }
    }

    const sensorParts = sensorStr.split(',').filter(s => s.includes('%'));
    const sensors = sensorParts.map(sp => {
      const [id, intensity] = sp.split('%').map(Number);
      return { id, intensity };
    });

    const entry = {
      sensors: sensors.length > 0 ? sensors : [{ id: 0, intensity: 100 }],
      name: blockName,
      delay,
    };
    if (blockParams) {
      Object.assign(entry, blockParams);
    }
    result.push(entry);
    delay = blockParams ? blockParams.exitTime || 0 : 0;
  }

  return result;
}
