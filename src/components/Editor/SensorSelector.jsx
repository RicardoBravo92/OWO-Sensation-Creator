import VestSVG from './VestSVG';
import { SENSORS } from '../../data/sensors';

export default function SensorSelector({ selectedSensors, onSensorToggle, readOnly = false }) {
  const click = (id) => { if (!readOnly) onSensorToggle(id); };

  return (
    <div className="p-2">
      <VestSVG selectedSensors={selectedSensors} onSensorClick={click} />
      <div className="grid grid-cols-2 gap-1 mt-3">
        {SENSORS.map(sensor => {
          const active = selectedSensors.some(s => s.id === sensor.id);
          return (
            <div key={sensor.id} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors text-xs ${active ? 'bg-green-900/30 border border-green-700/50' : 'bg-bg-primary hover:bg-bg-tertiary'}`} onClick={() => click(sensor.id)}>
              <span className="text-accent font-semibold w-4">{sensor.id}</span>
              <span className="text-text-secondary">{sensor.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
