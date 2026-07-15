const ALL_SENSORS = [
  { id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 },
  { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 },
  { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 },
  { id: 9, intensity: 100 },
];

export const TEMPLATES = {
  weapons: {
    name: 'Armas',
    icon: '🔫',
    templates: [
      {
        id: 'melee',
        name: 'Melee',
        description: 'Golpe cuerpo a cuerpo rápido',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }], name: 'Melee', frequency: 100, duration: 0.3, intensity: 90, rampUp: 0, rampDown: 200, exitTime: 0 },
          ],
          icon: 'impact-2',
          group: 'Impacts',
        },
      },
      {
        id: 'pistol',
        name: 'Pistol',
        description: 'Disparo de pistola con retroceso',
        sensation: {
          blocks: [
            { sensors: [{ id: 4, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Recoil', frequency: 55, duration: 0.1, intensity: 35, rampUp: 0, rampDown: 100, exitTime: 0 },
          ],
          icon: 'weapon-2',
          group: 'Recoil',
        },
      },
      {
        id: 'smg',
        name: 'SMG',
        description: 'Ametralladora con retroceso continuo',
        sensation: {
          blocks: [
            { sensors: [{ id: 4, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Fire', frequency: 20, duration: 0.1, intensity: 45, rampUp: 0, rampDown: 0, exitTime: 1 },
          ],
          icon: 'weapon-3',
          group: 'Recoil',
        },
      },
      {
        id: 'assault',
        name: 'Assault Rifle',
        description: 'Rifle de asalto con retroceso moderado',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 5, intensity: 100 }, { id: 4, intensity: 100 }], name: 'Fire', frequency: 50, duration: 0.1, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 2 },
          ],
          icon: 'weapon-3',
          group: 'Recoil',
        },
      },
      {
        id: 'shotgun',
        name: 'Shotgun',
        description: 'Escopeta con impacto fuerte y retardo',
        sensation: {
          blocks: [
            { sensors: [{ id: 5, intensity: 100 }, { id: 4, intensity: 100 }, { id: 0, intensity: 100 }], name: 'Blast', frequency: 100, duration: 0.1, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 4, intensity: 100 }, { id: 5, intensity: 100 }, { id: 0, intensity: 100 }], name: 'Recoil', frequency: 57, duration: 0.3, intensity: 55, rampUp: 0, rampDown: 300, exitTime: 0 },
          ],
          icon: 'weapon-0',
          group: 'Recoil',
        },
      },
      {
        id: 'launcher',
        name: 'Launcher',
        description: 'Lanzacohetes con doble impacto',
        sensation: {
          blocks: [
            { sensors: [{ id: 5, intensity: 100 }, { id: 4, intensity: 100 }, { id: 1, intensity: 100 }, { id: 0, intensity: 100 }], name: 'Fire', frequency: 100, duration: 0.2, intensity: 50, rampUp: 0, rampDown: 100, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 5, intensity: 100 }, { id: 4, intensity: 100 }], name: 'Recoil', frequency: 100, duration: 0.3, intensity: 70, rampUp: 0, rampDown: 300, exitTime: 0 },
          ],
          icon: 'weapon-2',
          group: 'Recoil',
        },
      },
      {
        id: 'bullet-impact',
        name: 'Bullet Impact',
        description: 'Impacto de bala con vibración fuerte',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Impact', frequency: 65, duration: 0.4, intensity: 100, rampUp: 0, rampDown: 400, exitTime: 0 },
          ],
          icon: 'impact-8',
          group: 'Impacts',
        },
      },
    ],
  },
  impacts: {
    name: 'Impactos',
    icon: '💥',
    templates: [
      {
        id: 'gta-default',
        name: 'Default GTA',
        description: 'Sensación base de GTA V (todo el cuerpo)',
        sensation: {
          blocks: [
            { sensors: [...ALL_SENSORS], name: 'Pulse 1', frequency: 40, duration: 0.1, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 2 },
            { sensors: [...ALL_SENSORS], name: 'Pulse 2', frequency: 40, duration: 0.1, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-7',
          group: 'Impacts',
        },
      },
      {
        id: 'explosive',
        name: 'Explosive',
        description: 'Explosión con onda expansiva en todo el cuerpo',
        sensation: {
          blocks: [
            { sensors: [...ALL_SENSORS], name: 'Explosion', frequency: 65, duration: 0.8, intensity: 85, rampUp: 0, rampDown: 800, exitTime: 0 },
          ],
          icon: 'impact-6',
          group: 'Impacts',
        },
      },
      {
        id: 'heavy',
        name: 'Heavy',
        description: 'Impacto pesado con caída',
        sensation: {
          blocks: [
            { sensors: [{ id: 5, intensity: 100 }, { id: 4, intensity: 100 }, { id: 0, intensity: 100 }], name: 'Impact', frequency: 100, duration: 1.0, intensity: 65, rampUp: 0, rampDown: 1000, exitTime: 0 },
          ],
          icon: 'weapon-0',
          group: 'Recoil',
        },
      },
      {
        id: 'drowning',
        name: 'Drowning',
        description: 'Ahogo con vibración en torso y brazos',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 3, intensity: 70 }, { id: 2, intensity: 71 }], name: 'Drown', frequency: 100, duration: 0.2, intensity: 80, rampUp: 100, rampDown: 100, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Impacts',
        },
      },
    ],
  },
  movement: {
    name: 'Movimiento',
    icon: '🏃',
    templates: [
      {
        id: 'gta-fall',
        name: 'Fall (GTA)',
        description: 'Caída con impacto en el suelo',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Impact', frequency: 40, duration: 0.6, intensity: 50, rampUp: 0, rampDown: 600, exitTime: 0 },
          ],
          icon: 'environment-5',
          group: 'Parkour',
        },
      },
      {
        id: 'vehicle',
        name: 'Vehicle (GTA)',
        description: 'Impacto de vehículo con vibración prolongada',
        sensation: {
          blocks: [
            { sensors: [...ALL_SENSORS], name: 'Impact', frequency: 100, duration: 0.1, intensity: 75, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [...ALL_SENSORS], name: 'Shake', frequency: 100, duration: 1.1, intensity: 75, rampUp: 0, rampDown: 1100, exitTime: 0 },
          ],
          icon: 'impact-7',
          group: 'Impacts',
        },
      },
      {
        id: 'jump',
        name: 'Salto',
        description: 'Impulso ascendente en piernas',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Jump', frequency: 100, duration: 0.4, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-5',
          group: 'Parkour',
        },
      },
      {
        id: 'sprint',
        name: 'Sprint',
        description: 'Carrera continua con pasos',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Step Left', frequency: 80, duration: 0.4, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Step Right', frequency: 80, duration: 0.4, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
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
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Wind', frequency: 100, duration: 2.5, intensity: 2, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-1',
          group: 'Feedback',
        },
      },
      {
        id: 'fire',
        name: 'Fuego',
        description: 'Quemadura con fuego en zona frontal',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Impact', frequency: 100, duration: 0.1, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [...ALL_SENSORS], name: 'Flame', frequency: 70, duration: 0.9, intensity: 70, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'magic-5',
          group: 'Combat',
        },
      },
      {
        id: 'warning',
        name: 'Warning (GTA)',
        description: 'Alerta pulsante en la espalda',
        sensation: {
          blocks: [
            { sensors: [{ id: 9, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Pulse 1', frequency: 63, duration: 0.1, intensity: 47, rampUp: 0, rampDown: 0, exitTime: 2 },
            { sensors: [{ id: 9, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Pulse 2', frequency: 63, duration: 0.1, intensity: 47, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'weapon-0',
          group: 'Feedback',
        },
      },
    ],
  },
  feedback: {
    name: 'Feedback/UI',
    icon: '🎮',
    templates: [
      {
        id: 'gta-death',
        name: 'Death (GTA)',
        description: 'Muerte con pulso en todo el cuerpo',
        sensation: {
          blocks: [
            { sensors: [...ALL_SENSORS], name: 'Death', frequency: 100, duration: 0.1, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 1 },
          ],
          icon: 'health-3',
          group: 'Health',
        },
      },
      {
        id: 'heartbeat',
        name: 'Latido',
        description: 'Pulso cardíaco',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Contraction', frequency: 100, duration: 0.1, intensity: 90, rampUp: 0, rampDown: 0, exitTime: 2 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Dilation', frequency: 90, duration: 0.2, intensity: 0, rampUp: 0, rampDown: 0, exitTime: 0 },
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
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }], name: 'Drink', frequency: 100, duration: 0.8, intensity: 40, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 1, intensity: 100 }, { id: 0, intensity: 100 }, { id: 6, intensity: 100 }, { id: 5, intensity: 100 }], name: 'Heal', frequency: 90, duration: 1.0, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'health-2',
          group: 'Health',
        },
      },
      {
        id: 'level-up',
        name: 'Subir de Nivel',
        description: 'Notificación de logro ascendente',
        sensation: {
          blocks: [
            { sensors: [{ id: 9, intensity: 100 }, { id: 8, intensity: 100 }, { id: 4, intensity: 100 }, { id: 3, intensity: 100 }], name: 'Low', frequency: 10, duration: 1.5, intensity: 50, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 5, intensity: 100 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 2, intensity: 100 }], name: 'Mid', frequency: 33, duration: 1.0, intensity: 60, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [...ALL_SENSORS], name: 'High', frequency: 70, duration: 1.2, intensity: 0, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Notifications',
        },
      },
    ],
  },
  racing: {
    name: 'Carreras',
    icon: '🏎️',
    templates: [
      {
        id: 'nitro',
        name: 'Nitro',
        description: 'Impulso de aceleración en la espalda',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 10 }, { id: 1, intensity: 10 }, { id: 6, intensity: 40 }, { id: 7, intensity: 40 }, { id: 8, intensity: 30 }, { id: 9, intensity: 30 }], name: 'Nitro', frequency: 35, duration: 0.2, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Nitro',
        },
      },
      {
        id: 'front-collision',
        name: 'Choque Frontal',
        description: 'Impacto frontal con rebote',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 80 }, { id: 5, intensity: 80 }, { id: 6, intensity: 70 }, { id: 7, intensity: 70 }, { id: 8, intensity: 70 }, { id: 9, intensity: 70 }], name: 'Impact', frequency: 80, duration: 0.1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 2, intensity: 100 }, { id: 3, intensity: 100 }, { id: 4, intensity: 10 }, { id: 5, intensity: 10 }], name: 'Recoil', frequency: 20, duration: 0.6, intensity: 25, rampUp: 0, rampDown: 5, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'back-collision',
        name: 'Choque Trasero',
        description: 'Impacto en la espalda con rebote',
        sensation: {
          blocks: [
            { sensors: [{ id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Impact', frequency: 80, duration: 0.1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Recoil', frequency: 20, duration: 0.6, intensity: 25, rampUp: 0, rampDown: 5, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'left-collision',
        name: 'Choque Izquierdo',
        description: 'Impacto lateral izquierdo',
        sensation: {
          blocks: [
            { sensors: [{ id: 1, intensity: 100 }, { id: 3, intensity: 100 }, { id: 5, intensity: 100 }, { id: 7, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Impact', frequency: 50, duration: 0.1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 1, intensity: 100 }, { id: 3, intensity: 10 }, { id: 7, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Recoil', frequency: 20, duration: 0.6, intensity: 25, rampUp: 0, rampDown: 5, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'right-collision',
        name: 'Choque Derecho',
        description: 'Impacto lateral derecho',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 2, intensity: 100 }, { id: 4, intensity: 100 }, { id: 6, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Impact', frequency: 50, duration: 0.1, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 2, intensity: 10 }, { id: 6, intensity: 100 }, { id: 8, intensity: 100 }], name: 'Recoil', frequency: 20, duration: 0.6, intensity: 25, rampUp: 0, rampDown: 5, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'big-jump-landing',
        name: 'Aterrizaje de Salto Grande',
        description: 'Impacto fuerte al caer de un salto alto',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 50 }, { id: 1, intensity: 50 }, { id: 2, intensity: 80 }, { id: 3, intensity: 80 }, { id: 4, intensity: 15 }, { id: 5, intensity: 15 }, { id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Landing', frequency: 80, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-5',
          group: 'Collisions',
        },
      },
      {
        id: 'front-object-collision',
        name: 'Choque con Objeto Frontal',
        description: 'Impacto contra un objeto al frente',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 70 }, { id: 1, intensity: 70 }, { id: 2, intensity: 90 }, { id: 3, intensity: 90 }, { id: 6, intensity: 90 }, { id: 7, intensity: 90 }, { id: 8, intensity: 80 }, { id: 9, intensity: 80 }], name: 'Impact', frequency: 40, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-4',
          group: 'Collisions',
        },
      },
      {
        id: 'back-object-collision',
        name: 'Choque con Objeto Trasero',
        description: 'Impacto contra un objeto por detrás',
        sensation: {
          blocks: [
            { sensors: [{ id: 6, intensity: 90 }, { id: 7, intensity: 90 }, { id: 8, intensity: 70 }, { id: 9, intensity: 70 }], name: 'Impact', frequency: 40, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'impact-4',
          group: 'Collisions',
        },
      },
      {
        id: 'scraps',
        name: 'Scraps',
        description: 'Vibración de raspadura suave',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 20 }, { id: 1, intensity: 20 }, { id: 2, intensity: 25 }, { id: 3, intensity: 25 }, { id: 4, intensity: 2 }, { id: 5, intensity: 2 }, { id: 6, intensity: 50 }, { id: 7, intensity: 50 }, { id: 8, intensity: 50 }, { id: 9, intensity: 50 }], name: 'Scrap', frequency: 80, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Collisions',
        },
      },
      {
        id: 'handbrake',
        name: 'Freno de Mano',
        description: 'Derrape con freno de mano',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 90 }, { id: 1, intensity: 90 }, { id: 2, intensity: 60 }, { id: 3, intensity: 60 }], name: 'Handbrake', frequency: 30, duration: 0.4, intensity: 80, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Mass Transfer',
        },
      },
      {
        id: 'countdown',
        name: '3-2-1 Countdown',
        description: 'Cuenta regresiva de salida',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 8, intensity: 85 }, { id: 9, intensity: 85 }], name: '3', frequency: 70, duration: 0.4, intensity: 100, rampUp: 3, rampDown: 0, exitTime: 8 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: '2', frequency: 70, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 10 },
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: '1', frequency: 70, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Gameplay Events',
        },
      },
      {
        id: 'go',
        name: '¡GO!',
        description: 'Señal de salida',
        sensation: {
          blocks: [
            { sensors: [{ id: 6, intensity: 100 }, { id: 7, intensity: 100 }, { id: 8, intensity: 100 }, { id: 9, intensity: 100 }], name: 'Go', frequency: 50, duration: 0.1, intensity: 100, rampUp: 1, rampDown: 0, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Gameplay Events',
        },
      },
      {
        id: 'checkpoints',
        name: 'Checkpoints',
        description: 'Paso por checkpoint',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 10 }, { id: 1, intensity: 10 }], name: 'Front', frequency: 10, duration: 0.1, intensity: 100, rampUp: 1, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 6, intensity: 30 }, { id: 7, intensity: 30 }], name: 'Back', frequency: 10, duration: 0.2, intensity: 100, rampUp: 0, rampDown: 1, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Gameplay Events',
        },
      },
      {
        id: 'nitro-lane',
        name: 'Nitro Lane',
        description: 'Carril de nitro',
        sensation: {
          blocks: [
            { sensors: [{ id: 2, intensity: 10 }, { id: 3, intensity: 10 }, { id: 8, intensity: 35 }, { id: 9, intensity: 35 }], name: 'Lane', frequency: 35, duration: 0.3, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
          ],
          icon: 'environment-0',
          group: 'Gameplay Events',
        },
      },
      {
        id: 'finish-line',
        name: 'Línea de Meta',
        description: 'Cruce de línea de meta con celebración',
        sensation: {
          blocks: [
            { sensors: [{ id: 0, intensity: 100 }, { id: 1, intensity: 100 }], name: 'Cross', frequency: 25, duration: 0.2, intensity: 100, rampUp: 1, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 2, intensity: 10 }, { id: 3, intensity: 10 }, { id: 6, intensity: 10 }, { id: 7, intensity: 10 }], name: 'Wave 1', frequency: 20, duration: 0.1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 6, intensity: 5 }, { id: 7, intensity: 5 }, { id: 8, intensity: 10 }, { id: 9, intensity: 10 }], name: 'Wave 2', frequency: 5, duration: 1.0, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0 },
            { sensors: [{ id: 8, intensity: 5 }, { id: 9, intensity: 5 }], name: 'Fade', frequency: 5, duration: 1.5, intensity: 100, rampUp: 0, rampDown: 10, exitTime: 0 },
          ],
          icon: 'reward-0',
          group: 'Gameplay Events',
        },
      },
    ],
  },
};
