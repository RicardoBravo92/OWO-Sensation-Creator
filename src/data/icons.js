export const ICON_CATEGORIES = {
  impact: {
    name: 'Impactos',
    icons: [
      { id: 'impact-0', name: 'Impacto 0' },
      { id: 'impact-1', name: 'Impacto 1' },
      { id: 'impact-2', name: 'Impacto 2' },
      { id: 'impact-3', name: 'Impacto 3' },
      { id: 'impact-4', name: 'Impacto 4' },
      { id: 'impact-5', name: 'Impacto 5' },
      { id: 'impact-6', name: 'Impacto 6' },
      { id: 'impact-7', name: 'Impacto 7' },
      { id: 'impact-8', name: 'Impacto 8' },
      { id: 'impact-9', name: 'Impacto 9' },
      { id: 'impact-10', name: 'Impacto 10' },
    ],
  },
  weapon: {
    name: 'Armas',
    icons: [
      { id: 'weapon-0', name: 'Arma 0' },
      { id: 'weapon-1', name: 'Arma 1' },
      { id: 'weapon-2', name: 'Arma 2' },
      { id: 'weapon-3', name: 'Arma 3' },
    ],
  },
  environment: {
    name: 'Entorno',
    icons: [
      { id: 'environment-0', name: 'Entorno 0' },
      { id: 'environment-1', name: 'Viento' },
      { id: 'environment-2', name: 'Insectos' },
      { id: 'environment-3', name: 'Entorno 3' },
      { id: 'environment-4', name: 'Entorno 4' },
      { id: 'environment-5', name: 'Caída' },
    ],
  },
  health: {
    name: 'Salud',
    icons: [
      { id: 'health-0', name: 'Corazón' },
      { id: 'health-1', name: 'Salud 1' },
      { id: 'health-2', name: 'Curación' },
      { id: 'health-3', name: 'Muerte' },
    ],
  },
  magic: {
    name: 'Magia',
    icons: [
      { id: 'magic-0', name: 'Magia 0' },
      { id: 'magic-1', name: 'Magia 1' },
      { id: 'magic-2', name: 'Magia 2' },
      { id: 'magic-3', name: 'Magia 3' },
      { id: 'magic-4', name: 'Magia 4' },
      { id: 'magic-5', name: 'Hechizo' },
    ],
  },
  feedback: {
    name: 'Feedback',
    icons: [
      { id: 'reward-0', name: 'Recompensa' },
      { id: 'alert-0', name: 'Alerta' },
    ],
  },
};

export const getAllIcons = () => {
  return Object.values(ICON_CATEGORIES).flatMap(cat => cat.icons);
};
