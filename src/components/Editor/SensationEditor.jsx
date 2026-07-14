import { useState } from 'react';
import Icon from '../Icon';
import BlockEditor from './BlockEditor';
import { ICON_CATEGORIES } from '../../data/icons';
import { GROUPS } from '../../data/groups';
import { useLanguage } from '../../i18n/LanguageContext';

export default function SensationEditor({ sensation, onChange, onSave }) {
  const [showPreview, setShowPreview] = useState(false);
  const { t } = useLanguage();
  const h = (field, value) => onChange({ ...sensation, [field]: value });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-xl font-semibold">{t('editor.title')}</h2>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-2 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => onSave({ ...sensation, id: sensation.id + 1, name: `${sensation.name} (${t('editor.duplicate')})` })}>
            <Icon name="copy" /> {t('editor.duplicate')}
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-danger text-white rounded-lg text-sm hover:bg-red-700 transition-colors" onClick={() => { if (confirm(t('editor.confirmDelete'))) onSave(null); }}>
            <Icon name="trash" /> {t('editor.delete')}
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover transition-colors" onClick={() => onSave(sensation)}>
            <Icon name="save" /> {t('editor.save')}
          </button>
        </div>
      </div>

      {/* Top row: ID, Name, Icon, Group */}
      <div className="bg-bg-card border border-border rounded-lg p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted uppercase tracking-wide">{t('editor.id')}</label>
              <input type="number" min={0} value={sensation.id} onChange={e => h('id', Math.max(0, parseInt(e.target.value) || 0))} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent w-full" />
          </div>
          <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
            <label className="text-xs text-text-muted uppercase tracking-wide">{t('editor.name')}</label>
            <input type="text" value={sensation.name} onChange={e => h('name', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted uppercase tracking-wide">{t('editor.icon')}</label>
            <select value={sensation.icon} onChange={e => h('icon', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent">
              {Object.entries(ICON_CATEGORIES).map(([catId, cat]) => (
                <optgroup key={catId} label={t(`icons.${catId}`)}>
                  {cat.icons.map(icon => <option key={icon.id} value={icon.id}>{t(`icons.${icon.id}`)}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted uppercase tracking-wide">{t('editor.group')}</label>
            <select value={sensation.group} onChange={e => h('group', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent">
              {GROUPS.map(g => <option key={g.id} value={g.id}>{t(`groups.${g.id}`)}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Blocks */}
      <div className="bg-bg-card border border-border rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">{t('editor.blocks')} ({sensation.blocks.length})</h3>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => h('blocks', [...sensation.blocks, { sensors: [{ id: 0, intensity: 100 }], name: `Block ${sensation.blocks.length + 1}`, frequency: 100, duration: 1, intensity: 100, rampUp: 0, rampDown: 0, exitTime: 0, delay: 0 }])}>
            <Icon name="plus" /> {t('editor.addBlock')}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {sensation.blocks.map((block, i) => (
            <BlockEditor key={i} block={block} index={i} onChange={b => { const n = [...sensation.blocks]; n[i] = b; h('blocks', n); }} onRemove={() => h('blocks', sensation.blocks.filter((_, j) => j !== i))} />
          ))}
        </div>
      </div>

      {/* Preview */}
      <div>
        <button className="flex items-center gap-2 px-3 py-2 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? t('editor.hidePreview') : t('editor.showPreview')}
        </button>
        {showPreview && (
          <div className="mt-4 bg-bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm text-text-muted">{t('editor.filePreview')}</h4>
              <button className="px-2 py-1 bg-bg-tertiary text-text-primary border border-border rounded text-xs hover:bg-bg-card transition-colors" onClick={() => navigator.clipboard.writeText(genText(sensation))}>{t('editor.copy')}</button>
            </div>
            <pre className="bg-bg-primary border border-border rounded p-4 font-mono text-xs text-accent overflow-x-auto whitespace-nowrap">{genText(sensation)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type, min, max, step, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-text-muted uppercase tracking-wide">{label}</label>
      <input type={type} min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value) || 0)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent w-full" />
    </div>
  );
}

function genText(s) {
  const p = `${s.frequency},${s.duration},${s.intensity},${s.rampUp},${s.rampDown},${s.exitTime}`;
  const bs = s.blocks.map(b => {
    const ss = b.sensors.map(x => `${x.id}%${x.intensity}`).join(',');
    const freq = b.frequency ?? 100;
    const dur = b.duration ?? 1;
    const int = b.intensity ?? 100;
    const ru = b.rampUp ?? 0;
    const rd = b.rampDown ?? 0;
    const et = b.exitTime ?? 0;
    const name = b.name || '';
    return `${freq},${dur},${int},${ru},${rd},${et},${name}|${ss}`;
  });
  return `${s.id}~${s.name}~${p},${bs.join('&')}~${s.icon}~${s.group}~#`;
}
