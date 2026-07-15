export const TEMPLATES = {
  combat: {
    name: 'Combate',
    icon: '⚔️',
    templates: [
      {
        id: 'light-hit',
        name: 'Golpe Ligero',
        description: 'Golpe rápido y suave en zona específica',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }], name: 'Hit', frequency: 100, duration: 1, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-3',
          group: 'Combat',
        },
      },
      {
        id: 'heavy-hit',
        name: 'Golpe Pesado',
        description: 'Golpe fuerte con impacto en todo el torso',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Hit', frequency: 100, duration: 1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 2 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 5, intensity: 80 }, { id: 6, intensity: 80 }], name: 'Impact', frequency: 100, duration: 1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-4',
          group: 'Combat',
        },
      },
      {
        id: 'sword-slash',
        name: 'Tajo de Espada',
        description: 'Corte diagonal con sangrado',
        sensation: {
          blocks: [
            { sensors: [{ id: 1, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Slash', frequency: 100, duration: 1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 6, intensity: 100 }, { id: 0, intensity: 100 }], name: 'Slash', frequency: 100, duration: 1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 6, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Bleeding', frequency: 100, duration: 10, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'weapon-1',
          group: 'Combat',
        },
      },
      {
        id: 'arrow-hit',
        name: 'Flechazo',
        description: 'Impacto de proyectil con penetración',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }], name: 'Entry', frequency: 100, duration: 1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 50 }], name: 'Impact', frequency: 100, duration: 1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-9',
          group: 'Impacts',
        },
      },
      {
        id: 'block-parry',
        name: 'Bloqueo/Parry',
        description: 'Bloqueo de ataque con vibración corta',
        sensation: {
          blocks: [
            { sensors: [{ id: 5, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Parry', frequency: 100, duration: 1, intensity: 70, rampUp: 0, rampDown: 0, exitTime: 1 },
            { sensors: [{ id: 1, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Parry', frequency: 50, duration: 4, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'weapon-0',
          group: 'Combat',
        },
      },
      {
        id: 'death',
        name: 'Muerte',
        description: 'Sensación de derrota/muerte en todo el cuerpo',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Death', frequency: 20, duration: 20, intensity: 80, rampUp: 0, rampDown: 5, exitTime: 0 },
          ],
          icon: 'health-3',
          group: 'Health',
        },
      },
    ],
  },
  movement: {
    name: 'Movimiento',
    icon: '🏃',
    templates: [
      {
        id: 'jump',
        name: 'Salto',
        description: 'Impulso ascendente en piernas',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Jump', frequency: 100, duration: 4, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-5',
          group: 'Parkour',
        },
      },
      {
        id: 'fall-landing',
        name: 'Aterrizaje',
        description: 'Impacto al caer en piernas y espalda baja',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 4, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Damage', frequency: 90, duration: 9, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-5',
          group: 'Parkour',
        },
      },
      {
        id: 'dodge',
        name: 'Esquiva',
        description: 'Movimiento rápido lateral',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Dodge', frequency: 100, duration: 3, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Parkour',
        },
      },
      {
        id: 'sprint',
        name: 'Sprint',
        description: 'Carrera continua con pasos',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Step Left', frequency: 80, duration: 4, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Step Right', frequency: 80, duration: 4, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Parkour',
        },
      },
    ],
  },
  environment: {
    name: 'Entorno',
    icon: '🌍',
    templates: [
      {
        id: 'wind',
        name: 'Viento',
        description: 'Brisa suave en la espalda',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Wind', frequency: 100, duration: 25, intensity: 2, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-1',
          group: 'Feedback',
        },
      },
      {
        id: 'rain',
        name: 'Lluvia',
        description: 'Gotas aleatorias en todo el cuerpo',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 20 }, { id: 1, intensity: 20 }, { id: 2, intensity: 25 }, { id: 3, intensity: 25 }, { id: 4, intensity: 2 }, { id: 5, intensity: 2 }, { id: 6, intensity: 50 }, { id: 7, intensity: 50 }, { id: 8, intensity: 50 }, { id: 9, intensity: 50 }], name: 'Rain', frequency: 21, duration: 30, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-2',
          group: 'Feedback',
        },
      },
      {
        id: 'fire',
        name: 'Fuego',
        description: 'Quemadura con fuego en zona frontal',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Impact', frequency: 100, duration: 1, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Flame', frequency: 70, duration: 9, intensity: 70, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'magic-5',
          group: 'Combat',
        },
      },
    ],
  },
  vehicle: {
    name: 'Vehículos',
    icon: '🚗',
    templates: [
      {
        id: 'engine-idle',
        name: 'Motor en Ralentí',
        description: 'Vibración continua del motor',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 30 }, { id: 1, intensity: 30 }], name: 'Engine', frequency: 30, duration: 2, intensity: 30, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Miscellaneous',
        },
      },
      {
        id: 'nitro',
        name: 'Nitro',
        description: 'Impulso de aceleración',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 10 }, { id: 1, intensity: 10 }, { id: 6, intensity: 40 }, { id: 7, intensity: 40 }, { id: 8, intensity: 30 }, { id: 9, intensity: 30 }], name: 'Nitro', frequency: 35, duration: 2, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Nitro',
        },
      },
      {
        id: 'collision-front',
        name: 'Choque Frontal',
        description: 'Impacto fuerte en el pecho',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 80 }, { id: 5, intensity: 80 }, { id: 6, intensity: 70 }, { id: 7, intensity: 70 }, { id: 8, intensity: 70 }, { id: 9, intensity: 70 }], name: 'Impact', frequency: 80, duration: 1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 10 }, { id: 5, intensity: 10 }], name: 'Recoil', frequency: 25, duration: 6, intensity: 5, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'collision-back',
        name: 'Choque Trasero',
        description: 'Impacto en la espalda',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Impact', frequency: 80, duration: 1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Recoil', frequency: 25, duration: 6, intensity: 5, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'handbrake',
        name: 'Freno de Mano',
        description: 'Frenado brusco',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 90 }, { id: 1, intensity: 90 }, { id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Handbrake', frequency: 30, duration: 4, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Mass Transfer',
        },
      },
    ],
  },
  feedback: {
    name: 'Feedback/UI',
    icon: '🎮',
    templates: [
      {
        id: 'level-up',
        name: 'Subir de Nivel',
        description: 'Notificación de logro ascendente',
        sensation: {
          blocks: [
            { sensors: [{ id: 9, intensity: 100 }, { id: 8, intensity: 100 }, { id: 4, intensity: 100 }, { id: 3, intensity: 100 }], name: 'Low', frequency: 10, duration: 15, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 2, intensity: 100 }], name: 'Mid', frequency: 33, duration: 10, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'High', frequency: 70, duration: 12, intensity: 0, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Notifications',
        },
      },
      {
        id: 'victory',
        name: 'Victoria',
        description: 'Celebración de victoria',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 7, intensity: 100 }, { id: 2, intensity: 100 }, { id: 9, intensity: 100 }, { id: 1, intensity: 100 }, { id: 6, intensity: 100 }, { id: 3, intensity: 100 }, { id: 8, intensity: 100 }, { id: 5, intensity: 100 }, { id: 4, intensity: 100 }], name: 'Victory', frequency: 100, duration: 31, intensity: 90, rampUp: 5, rampDown: 14, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Notifications',
        },
      },
      {
        id: 'heartbeat',
        name: 'Latido',
        description: 'Pulso cardíaco',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Contraction', frequency: 100, duration: 1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 2 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Dilation', frequency: 90, duration: 2, intensity: 0, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'health-0',
          group: 'Health',
        },
      },
      {
        id: 'healing',
        name: 'Curación',
        description: 'Efecto de curación suave',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }], name: 'Drink', frequency: 100, duration: 8, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 1, intensity: 100 }, { id: 0, intensity: 100 }, { id: 6, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Heal', frequency: 90, duration: 10, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'health-2',
          group: 'Health',
        },
      },
    ],
  },
  interaction: {
    name: 'Interacciones',
    icon: '🤝',
    templates: [
      {
        id: 'hug',
        name: 'Abrazo',
        description: 'Abrazo suave y envolvente',
        sensation: {
          blocks: [
            { sensors: [{ id: 5, intensity: 100 }, { id: 4, intensity: 100 }, { id: 1, intensity: 100 }, { id: 0, intensity: 100 }, { id: 7, intensity: 100 }, { id: 2, intensity: 100 }], name: 'Hug', frequency: 100, duration: 25, intensity: 35, rampUp: 150, rampDown: 100, exitTime: 2 },
            { sensors: [{ id: 7, intensity: 100 }], name: 'Palm', frequency: 80, duration: 1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 7, intensity: 100 }], name: 'Palm', frequency: 80, duration: 1, intensity: 0, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Interactions',
        },
      },
    ],
  },
};
