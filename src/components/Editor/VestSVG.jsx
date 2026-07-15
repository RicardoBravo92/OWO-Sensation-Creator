import { GiTShirt } from 'react-icons/gi';
import { useLanguage } from '../../i18n/LanguageContext';

const FRONT_SENSORS = [
  { id: 5, x: 12, y: 32 },
  { id: 1, x: 35, y: 32 },
  { id: 0, x: 63, y: 32 },
  { id: 4, x: 85, y: 32 },
  { id: 3, x: 35, y: 70 },
  { id: 2, x: 63, y: 70 },
];
const BACK_SENSORS = [
  { id: 7, x: 35, y: 45 },
  { id: 6, x: 63, y: 45 },
  { id: 9, x: 35, y: 70 },
  { id: 8, x: 63, y: 70 },
];

function color(i) {
  if (i === 0) return 'rgba(30,30,50,0.8)';
  if (i < 30) return '#1a5a3a';
  if (i < 60) return '#2a7a4a';
  if (i < 80) return '#3a9a5a';
  return '#4aba6a';
}
function glow(i) {
  if (i === 0) return 'none';
  if (i < 50) return '0 0 6px rgba(74,186,106,0.4)';
  if (i < 80) return '0 0 10px rgba(74,186,106,0.6)';
  return '0 0 14px rgba(74,186,106,0.8)';
}

function Dot({ id, x, y, intensity, onClick, t }) {
  return (
    <button
      className='absolute w-[20px] h-[20px] rounded-full border-2 cursor-pointer flex flex-col items-center justify-center gap-0 p-0 z-10 transition-all duration-150 hover:scale-125 hover:border-accent hover:z-20 active:scale-95 -translate-x-1/2 -translate-y-1/2'
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundColor: color(intensity),
        boxShadow: glow(intensity),
        borderColor: intensity > 0 ? '#4aba6a' : '#4a4a6a',
      }}
      onClick={() => onClick?.(id)}
      title={`${id} - ${t(`sensors.${id}`)}${intensity > 0 ? ` (${intensity}%)` : ''}`}
    >
      <span className='text-[10px] font-bold text-gray-200 leading-none'>
        {id + 1}
      </span>
      {/* {intensity > 0 && (
        <span className='text-[7px] text-green-300 leading-none'>
          {intensity}
        </span>
      )} */}
    </button>
  );
}

export default function VestSVG({ onSensorClick, selectedSensors }) {
  const { t } = useLanguage();
  const gi = (id) => selectedSensors?.find((s) => s.id === id)?.intensity || 0;

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-8 justify-center'>
        {/* FRENTE */}
        <div className='flex flex-col items-center'>
          <div className='text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-2'>
            {t('vest.front')}
          </div>
          <div className='relative w-[150px] h-[170px]'>
            <GiTShirt className='w-[150px] h-[170px] text-[#252540] drop-shadow-md' />
            <div className='absolute left-1/2 top-[28%] -translate-x-1/2 w-[2px] h-[60%] bg-white/40 rounded-full' />
            {FRONT_SENSORS.map((s) => (
              <Dot
                key={s.id}
                {...s}
                intensity={gi(s.id)}
                onClick={onSensorClick}
                t={t}
              />
            ))}
          </div>
        </div>
        {/* ESPALDA */}
        <div className='flex flex-col items-center'>
          <div className='text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-2'>
            {t('vest.back')}
          </div>
          <div className='relative w-[150px] h-[170px] opacity-85'>
            <GiTShirt className='w-[150px] h-[170px] text-[#202038] drop-shadow-md' />
            {BACK_SENSORS.map((s) => (
              <Dot
                key={s.id}
                {...s}
                intensity={gi(s.id)}
                onClick={onSensorClick}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
