export const SENSORS = [
  { id: 0, name: 'Abdominal Izq', muscle: 'Abdominal_L', position: 'front-left', zone: 'abdomen' },
  { id: 1, name: 'Pectoral Izq', muscle: 'Pectoral_L', position: 'front-right', zone: 'chest' },
  { id: 2, name: 'Dorsal Izq', muscle: 'Dorsal_L', position: 'back-left', zone: 'back' },
  { id: 3, name: 'Brazo Izq', muscle: 'Arm_L', position: 'arm-left', zone: 'arm' },
  { id: 4, name: 'Lumbar Izq', muscle: 'Lumbar_L', position: 'waist-left', zone: 'waist' },
  { id: 5, name: 'Abdominal Der', muscle: 'Abdominal_R', position: 'front-right', zone: 'abdomen' },
  { id: 6, name: 'Pectoral Der', muscle: 'Pectoral_R', position: 'back-right', zone: 'chest' },
  { id: 7, name: 'Dorsal Der', muscle: 'Dorsal_R', position: 'back-right', zone: 'back' },
  { id: 8, name: 'Brazo Der', muscle: 'Arm_R', position: 'arm-right', zone: 'arm' },
  { id: 9, name: 'Lumbar Der', muscle: 'Lumbar_R', position: 'waist-right', zone: 'waist' },
];

export const SENSOR_ZONES = {
  abdomen: [0, 5],
  chest: [1, 6],
  back: [2, 7],
  arms: [3, 8],
  waist: [4, 9],
  front: [0, 1, 5, 6],
  backFull: [2, 3, 4, 7, 8, 9],
  left: [0, 1, 2, 3, 4],
  right: [5, 6, 7, 8, 9],
  all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};
