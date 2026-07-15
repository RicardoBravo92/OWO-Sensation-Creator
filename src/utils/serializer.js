export function serializeSensation(sensation) {
  const blockStrings = sensation.blocks.map((block) => {
    const sensorStr = block.sensors
      .map(s => `${s.id}%${s.intensity}`)
      .join(',');

    const hasSensors = sensorStr.length > 0;
    const hasParams = block.frequency !== undefined;

    const bdur = block.duration !== undefined ? Math.round(block.duration * 10) : 1;

    if (hasParams && hasSensors) {
      return `${block.frequency},${bdur},${block.intensity},${block.rampUp ?? 0},${block.rampDown ?? 0},${block.exitTime ?? 0},${block.name || ''}|${sensorStr}`;
    }

    if (hasParams && !hasSensors) {
      return `${block.frequency},${bdur},${block.intensity},${block.rampUp ?? 0},${block.rampDown ?? 0},${block.exitTime ?? 0},${block.name || ''}`;
    }

    if (!hasParams && hasSensors) {
      return sensorStr;
    }

    return block.name || '';
  });

  const blockStr = blockStrings.length > 0 ? blockStrings.join('&') : '';

  return `${sensation.id}~${sensation.name}~${blockStr}~${sensation.icon}~${sensation.group}~#`;
}

export function serializeAuthowoFile(sensations) {
  return sensations.map(s => serializeSensation(s)).join('\n');
}

export function serializeOwoFile(sensation) {
  return serializeSensation(sensation);
}

export function generateNewId(sensations) {
  if (sensations.length === 0) return 0;
  return Math.max(...sensations.map(s => s.id)) + 1;
}

export function createEmptySensation(id = 0) {
  return {
    id,
    name: 'New Sensation',
    blocks: [
      { sensors: [{ id: 0, intensity: 100 }], name: 'Block 1', frequency: 100, duration: 1, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
    ],
    icon: 'impact-0',
    group: 'Default',
  };
}
