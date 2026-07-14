import { useState } from 'react';
import Icon from '../Icon';
import SensorSelector from './SensorSelector';
import { SENSORS } from '../../data/sensors';
import { useLanguage } from '../../i18n/LanguageContext';

export default function BlockEditor({ block, index, onChange, onRemove }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const h = (field, value) => onChange({ ...block, [field]: value });

  return (
    <div className='bg-bg-primary border border-border rounded-lg overflow-hidden'>
      <div className='flex justify-between items-center px-4 py-3 bg-bg-tertiary'>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-accent font-semibold'>
            #{index + 1}
          </span>
          <input
            type='text'
            value={block.name || ''}
            onChange={(e) => h('name', e.target.value)}
            placeholder={t('block.blockName')}
            className='bg-transparent border-none text-text-primary text-sm px-1 rounded w-36 focus:outline-none focus:bg-bg-primary'
          />
        </div>
        <div className='flex gap-1'>
          <button
            className='p-1.5 text-text-muted hover:bg-bg-primary rounded transition-colors'
            onClick={() => setExpanded(!expanded)}
          >
            <Icon name={expanded ? 'chev-up' : 'chev-down'} />
          </button>
          <button
            className='p-1.5 text-text-muted hover:text-danger hover:bg-bg-primary rounded transition-colors'
            onClick={onRemove}
          >
            <Icon name='trash' />
          </button>
        </div>
      </div>

      <div className='px-4 py-2 text-xs text-text-muted flex justify-between'>
        <span>
          {block.sensors.length} {t('block.activeSensors')}
        </span>
        <span className='text-text-secondary'>
          {block.frequency ?? 100}Hz | {block.duration ?? 1} |{' '}
          {block.intensity ?? 100}%
        </span>
      </div>

      {expanded && (
        <div className='px-4 py-3 border-t border-border flex flex-col lg:flex-row gap-5'>
          <div className='grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 gap-3 mb-4 w-full lg:w-1/4'>
            {[
              { l: t('block.freq'), f: 'frequency', min: 1, max: 100 },
              {
                l: t('block.duration'),
                f: 'duration',
                min: 0.1,
                max: 5,
                step: 0.1,
              },
              { l: t('block.intensity'), f: 'intensity', min: 0, max: 100 },
              { l: t('block.rampUp'), f: 'rampUp', min: 0, max: 200 },
              { l: t('block.rampDown'), f: 'rampDown', min: 0, max: 200 },
              {
                l: t('block.exitTime'),
                f: 'exitTime',
                min: 0.0,
                max: 2,
                step: 0.1,
              },
            ].map(({ l, f, min, max, step }) => (
              <div key={f} className='flex flex-col gap-1'>
                <label className='text-[10px] text-text-muted'>{l}</label>
                <input
                  type='number'
                  min={min}
                  max={max}
                  step={step}
                  value={
                    block[f] ??
                    (f === 'frequency'
                      ? 100
                      : f === 'intensity'
                        ? 100
                        : f === 'duration'
                          ? 1
                          : 0)
                  }
                  onChange={(e) =>
                    h(
                      f,
                      step
                        ? parseFloat(e.target.value) || 0
                        : parseInt(e.target.value) || 0,
                    )
                  }
                  className='bg-bg-secondary border border-border rounded px-2 py-1.5 text-text-primary text-sm w-full focus:outline-none focus:border-accent'
                />
              </div>
            ))}
          </div>

          <div className='mb-4 w-1/2 flex flex-col items-center md:mx-auto'>
            <h4 className='text-xs text-text-muted mb-2'>
              {t('block.muscleIntensity')}
            </h4>
            {block.sensors.map((sensor) => (
              <div
                key={sensor.id}
                className='flex items-center gap-3 py-1 w-1/2'
              >
                <span className='text-xs text-text-secondary w-14 md:w-28 shrink-0'>
                  {t(`sensors.${sensor.id}`)}
                </span>
                <input
                  type='range'
                  min={0}
                  max={100}
                  value={sensor.intensity}
                  onChange={(e) => {
                    const n = block.sensors.map((s) =>
                      s.id === sensor.id
                        ? {
                            ...s,
                            intensity: Math.min(
                              100,
                              Math.max(0, parseInt(e.target.value)),
                            ),
                          }
                        : s,
                    );
                    h('sensors', n);
                  }}
                  className='flex-1 accent-accent'
                />
                <span className='text-[11px] text-text-muted w-10 text-right'>
                  {sensor.intensity}%
                </span>
              </div>
            ))}
          </div>

          <SensorSelector
            selectedSensors={block.sensors}
            onSensorToggle={(id) => {
              const ex = block.sensors.find((s) => s.id === id);
              h(
                'sensors',
                ex
                  ? block.sensors.filter((s) => s.id !== id)
                  : [...block.sensors, { id, intensity: 100 }],
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
