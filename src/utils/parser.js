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

  const defaultGlobal = { frequency: 100, duration: 1, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 };

  // Check if first token of combinedField looks like 6 global params
  // (old format: "100,10,50,0,0,0,blocks..." vs new format: "100,10,50,0,0,0,...blocks..." or just blocks)
  const firstCommaIdx = combinedField.indexOf(',');
  let blockSection = combinedField;
  let global = { ...defaultGlobal };

  if (firstCommaIdx > -1) {
    const beforeFirstComma = combinedField.substring(0, firstCommaIdx);
    // Check if this looks like a block with sensors (contains %) or a block with 6 nums
    // In old format, first 6 comma-separated values before any | or & are globals
    const hasPipe = combinedField.indexOf('|') > -1;
    const hasAmp = combinedField.indexOf('&') > -1;

    if (hasPipe || hasAmp) {
      // Old format detection: check if before the first | or & there are 6+ numbers
      const splitTarget = hasPipe ? combinedField.indexOf('|') : combinedField.indexOf('&');
      const beforeBlock = combinedField.substring(0, splitTarget);
      const commasInBefore = (beforeBlock.match(/,/g) || []).length;

      if (commasInBefore >= 6) {
        // Old format: first 6 comma-values are globals
        const allCommas = [];
        for (let i = 0; i < combinedField.length; i++) {
          if (combinedField[i] === ',') allCommas.push(i);
        }
        const globalStr = combinedField.substring(0, allCommas[5]);
        blockSection = combinedField.substring(allCommas[5] + 1);

        const gp = globalStr.split(',').map(Number);
        global = {
          frequency: gp[0] || 100,
          duration: (gp[1] || 1) / 10,
          intensity: gp[2] || 50,
          rampUp: gp[3] || 0,
          rampDown: gp[4] || 0,
          exitTime: gp[5] || 0,
        };
      }
    } else {
      // No pipe and no ampersand - just sensors or single block
      // Check if first 6 comma-separated values before any % look like global params
      const percentIdx = combinedField.indexOf('%');
      const beforePercent = percentIdx > -1 ? combinedField.substring(0, percentIdx) : combinedField;
      const commasInBefore = (beforePercent.match(/,/g) || []).length;

      if (commasInBefore >= 6) {
        const allCommas = [];
        for (let i = 0; i < combinedField.length; i++) {
          if (combinedField[i] === ',') allCommas.push(i);
        }
        const globalStr = combinedField.substring(0, allCommas[5]);
        blockSection = combinedField.substring(allCommas[5] + 1);

        const gp = globalStr.split(',').map(Number);
        global = {
          frequency: gp[0] || 100,
          duration: (gp[1] || 1) / 10,
          intensity: gp[2] || 50,
          rampUp: gp[3] || 0,
          rampDown: gp[4] || 0,
          exitTime: gp[5] || 0,
        };
      }
    }
  }

  const blocks = parseBlocks(blockSection, global);

  return {
    id,
    name,
    blocks,
    icon: icon || 'impact-0',
    group: group || 'Default',
  };
}

function parseBlocks(blockSection, global) {
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
          duration: nums[1] / 10,
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
          duration: nums[1] / 10,
          intensity: nums[2],
          rampUp: nums[3],
          rampDown: nums[4],
          exitTime: nums[5],
        };
        blockName = parts.slice(nameStart).join(',').trim();
      } else {
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
      frequency: global.frequency,
      duration: global.duration,
      intensity: global.intensity,
      rampUp: global.rampUp,
      rampDown: global.rampDown,
      exitTime: global.exitTime,
    };
    if (blockParams) {
      Object.assign(entry, blockParams);
    }
    result.push(entry);
    delay = blockParams ? blockParams.exitTime || 0 : 0;
  }

  return result;
}
