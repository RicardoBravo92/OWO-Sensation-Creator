import VestSVG from './VestSVG';
import { SENSORS } from '../../data/sensors';
import { useLanguage } from '../../i18n/LanguageContext';

export default function SensorSelector({
  selectedSensors,
  onSensorToggle,
  readOnly = false,
}) {
  const { t } = useLanguage();
  const click = (id) => {
    if (!readOnly) onSensorToggle(id);
  };

  return (
    <div className='p-2'>
      <VestSVG selectedSensors={selectedSensors} onSensorClick={click} />
      <div className='grid grid-cols-2 gap-3 mt-3'>
        {SENSORS.map((sensor) => {
          const active = selectedSensors.some((s) => s.id === sensor.id);
          return (
            <div
              key={sensor.id}
              className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors text-xs ${active ? 'bg-green-900/30 border border-green-700/50' : 'bg-bg-primary hover:bg-bg-tertiary'}`}
              onClick={() => click(sensor.id)}
            >
              <span className='text-accent font-semibold w-4'>{sensor.id}</span>
              <span className='text-text-secondary'>
                {t(`sensors.${sensor.id}`)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
