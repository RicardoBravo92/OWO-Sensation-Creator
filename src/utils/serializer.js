export function serializeSensation(sensation) {
  const {
    id,
    name,
    frequency,
    duration,
    intensity,
    rampUp,
    rampDown,
    exitTime,
    blocks,
    icon,
    group,
  } = sensation;

  const params = `${frequency},${duration},${intensity},${rampUp},${rampDown},${exitTime}`;

  const blockStrings = blocks.map((block, index) => {
    const sensorStr = block.sensors
      .map(s => `${s.id}%${s.intensity}`)
      .join(',');

    const hasSensors = sensorStr.length > 0;
    const hasParams = block.frequency !== undefined;

    if (hasParams && hasSensors) {
      return `${block.frequency},${block.duration},${block.intensity},${block.rampUp},${block.rampDown},${block.exitTime},${block.name || ''}|${sensorStr}`;
    }

    if (hasParams && !hasSensors) {
      return `${block.frequency},${block.duration},${block.intensity},${block.rampUp},${block.rampDown},${block.exitTime},${block.name || ''}`;
    }

    if (!hasParams && hasSensors) {
      return sensorStr;
    }

    // No params, no sensors - just a name
    return block.name || '';
  });

  const blockStr = blockStrings.length > 0 ? blockStrings.join('&') : '';

  return `${id}~${name}~${params},${blockStr}~${icon}~${group}~#`;
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
    name: 'Nueva Sensación',
    frequency: 100,
    duration: 1,
    intensity: 50,
    rampUp: 0,
    rampDown: 0,
    exitTime: 0,
    blocks: [
      { sensors: [{ id: 0, intensity: 100 }], name: 'Block 1' },
    ],
    icon: 'impact-0',
    group: 'Default',
  };
}
