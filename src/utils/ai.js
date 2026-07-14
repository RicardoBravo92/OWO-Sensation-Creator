const SENSATION_PATTERNS = {
  combat: {
    keywords: ['golpe', 'hit', 'golpear', 'golpe fuerte', 'golpe ligero', 'puñetazo', 'patada', 'kick', 'punch', 'slap', 'bofetada'],
    template: {
      frequency: 100,
      duration: 1,
      intensity: 80,
      rampUp: 0,
      rampDown: 0,
      exitTime: 1,
      icon: 'impact-3',
      group: 'Combat',
    },
  },
  slash: {
    keywords: ['corte', 'tajo', 'slash', 'espada', 'sword', 'cuchillo', 'daga', 'blade'],
    template: {
      frequency: 100,
      duration: 1,
      intensity: 90,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'weapon-1',
      group: 'Combat',
    },
  },
  block: {
    keywords: ['bloqueo', 'parry', 'defensa', 'block', 'shield', 'escudo'],
    template: {
      frequency: 100,
      duration: 1,
      intensity: 70,
      rampUp: 0,
      rampDown: 0,
      exitTime: 1,
      icon: 'weapon-0',
      group: 'Combat',
    },
  },
  death: {
    keywords: ['muerte', 'morir', 'derrota', 'death', 'defeat', 'perder'],
    template: {
      frequency: 20,
      duration: 20,
      intensity: 80,
      rampUp: 0,
      rampDown: 5,
      exitTime: 0,
      icon: 'health-3',
      group: 'Health',
    },
  },
  healing: {
    keywords: ['curar', 'curación', 'heal', 'potion', 'vida', 'recuperar'],
    template: {
      frequency: 100,
      duration: 8,
      intensity: 40,
      rampUp: 0,
      rampDown: 500,
      exitTime: 0,
      icon: 'health-2',
      group: 'Health',
    },
  },
  jump: {
    keywords: ['salto', 'saltar', 'jump', 'brincar', 'impulso'],
    template: {
      frequency: 100,
      duration: 4,
      intensity: 50,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-5',
      group: 'Parkour',
    },
  },
  fall: {
    keywords: ['caída', 'caer', 'fall', 'aterrizar', 'landing'],
    template: {
      frequency: 90,
      duration: 9,
      intensity: 100,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-5',
      group: 'Parkour',
    },
  },
  dodge: {
    keywords: ['esquiva', 'esquivar', 'dodge', 'dash', 'evadir'],
    template: {
      frequency: 100,
      duration: 3,
      intensity: 60,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-0',
      group: 'Parkour',
    },
  },
  wind: {
    keywords: ['viento', 'wind', 'brisa', 'breeze', 'aire'],
    template: {
      frequency: 100,
      duration: 25,
      intensity: 2,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-1',
      group: 'Feedback',
    },
  },
  fire: {
    keywords: ['fuego', 'fire', 'quemadura', 'burn', 'flame'],
    template: {
      frequency: 100,
      duration: 1,
      intensity: 50,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'magic-5',
      group: 'Combat',
    },
  },
  heartbeat: {
    keywords: ['latido', 'corazón', 'heartbeat', 'pulse', 'pulso'],
    template: {
      frequency: 100,
      duration: 1,
      intensity: 90,
      rampUp: 0,
      rampDown: 0,
      exitTime: 2,
      icon: 'health-0',
      group: 'Health',
    },
  },
  hug: {
    keywords: ['abrazo', 'abrazar', 'hug', 'acurrucar', 'cuddle'],
    template: {
      frequency: 100,
      duration: 25,
      intensity: 35,
      rampUp: 150,
      rampDown: 100,
      exitTime: 2,
      icon: 'environment-0',
      group: 'Interactions',
    },
  },
  nitro: {
    keywords: ['nitro', 'aceleración', 'boost', 'turbo', 'speed'],
    template: {
      frequency: 35,
      duration: 2,
      intensity: 100,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-0',
      group: 'Nitro',
    },
  },
  collision: {
    keywords: ['choque', 'colisión', 'collision', 'impact', 'golpe'],
    template: {
      frequency: 80,
      duration: 1,
      intensity: 80,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'environment-0',
      group: 'Collisions',
    },
  },
  levelup: {
    keywords: ['nivel', 'subir', 'level up', 'logro', 'achievement', 'experiencia'],
    template: {
      frequency: 10,
      duration: 15,
      intensity: 50,
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      icon: 'reward-0',
      group: 'Notifications',
    },
  },
};

const ZONE_KEYWORDS = {
  front: ['frente', 'pecho', 'frontal', 'front', 'chest', 'adelante'],
  back: ['espalda', 'back', 'detrás', 'posterior'],
  arms: ['brazo', 'arm', 'brazos', 'arms', 'hombro', 'shoulder'],
  left: ['izquierda', 'izq', 'left'],
  right: ['derecha', 'der', 'right'],
  all: ['todo', 'cuerpo', 'full', 'all', 'entero', 'completo', 'everywhere'],
  abdomen: ['abdomen', 'abdominal', 'stomach', 'panza'],
  waist: ['cintura', 'waist', 'lumbar'],
};

const INTENSITY_KEYWORDS = {
  light: ['suave', 'ligero', 'light', 'soft', 'bajo', 'pequeño'],
  medium: ['medio', 'medium', 'normal', 'moderado'],
  strong: ['fuerte', 'intenso', 'strong', 'hard', 'alto', 'grande', 'duro'],
};

const SENSORS_BY_ZONE = {
  front: [0, 1, 2, 3, 4, 5],
  back: [6, 7, 8, 9],
  arms: [2, 3],
  left: [5, 1, 0, 3],
  right: [4, 2, 8, 9],
  all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  abdomen: [0, 5],
  waist: [4, 9],
  chest: [1, 6],
};

export function generateSensationFromPrompt(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  let matchedPattern = null;
  for (const [key, pattern] of Object.entries(SENSATION_PATTERNS)) {
    if (pattern.keywords.some(kw => lowerPrompt.includes(kw))) {
      matchedPattern = pattern;
      break;
    }
  }

  if (!matchedPattern) {
    matchedPattern = {
      template: {
        frequency: 100,
        duration: 1,
        intensity: 50,
        rampUp: 0,
        rampDown: 0,
        exitTime: 0,
        icon: 'impact-0',
        group: 'Default',
      },
    };
  }

  let targetZone = 'all';
  for (const [zone, keywords] of Object.entries(ZONE_KEYWORDS)) {
    if (keywords.some(kw => lowerPrompt.includes(kw))) {
      targetZone = zone;
      break;
    }
  }

  let intensityMultiplier = 1;
  for (const [level, keywords] of Object.entries(INTENSITY_KEYWORDS)) {
    if (keywords.some(kw => lowerPrompt.includes(kw))) {
      if (level === 'light') intensityMultiplier = 0.5;
      else if (level === 'medium') intensityMultiplier = 0.75;
      else if (level === 'strong') intensityMultiplier = 1.25;
      break;
    }
  }

  const sensors = SENSORS_BY_ZONE[targetZone] || SENSORS_BY_ZONE.all;
  const baseIntensity = Math.min(100, Math.round(matchedPattern.template.intensity * intensityMultiplier));

  const blocks = [
    {
      sensors: sensors.map(id => ({ id, intensity: 100 })),
      name: 'Block 1',
    },
  ];

  if (lowerPrompt.includes('pulso') || lowerPrompt.includes('latido')) {
    blocks.push({
      sensors: sensors.map(id => ({ id, intensity: 100 })),
      name: 'Block 2',
      frequency: Math.max(1, matchedPattern.template.frequency - 10),
      duration: matchedPattern.template.duration,
      intensity: Math.max(10, baseIntensity - 20),
      rampUp: 0,
      rampDown: 0,
      exitTime: 0,
      delay: 100,
    });
  }

  if (lowerPrompt.includes('subir') || lowerPrompt.includes('ascendente')) {
    const sensorsAsc = sensors.filter(id => id >= 6);
    const sensorsBase = sensors.filter(id => id < 6);
    blocks.length = 0;
    if (sensorsBase.length > 0) {
      blocks.push({
        sensors: sensorsBase.map(id => ({ id, intensity: 100 })),
        name: 'Start',
      });
    }
    if (sensorsAsc.length > 0) {
      blocks.push({
        sensors: sensorsAsc.map(id => ({ id, intensity: 100 })),
        name: 'Rise',
        delay: 100,
      });
    }
  }

  return {
    id: 0,
    name: extractNameFromPrompt(prompt),
    frequency: matchedPattern.template.frequency,
    duration: matchedPattern.template.duration,
    intensity: baseIntensity,
    rampUp: Math.min(matchedPattern.template.rampUp, 200),
    rampDown: Math.min(matchedPattern.template.rampDown, 100),
    exitTime: matchedPattern.template.exitTime,
    blocks,
    icon: matchedPattern.template.icon,
    group: matchedPattern.template.group,
  };
}

function extractNameFromPrompt(prompt) {
  const words = prompt.split(' ').slice(0, 4);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
