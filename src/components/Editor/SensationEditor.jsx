import { useState } from 'react';
import Icon from '../Icon';
import BlockEditor from './BlockEditor';
import { ICON_CATEGORIES } from '../../data/icons';
import { GROUPS } from '../../data/groups';

export default function SensationEditor({ sensation, onChange, onSave }) {
  const [showPreview, setShowPreview] = useState(false);
  const h = (field, value) => onChange({ ...sensation, [field]: value });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-xl font-semibold">Editor de Sensación</h2>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-2 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => onSave({ ...sensation, id: sensation.id + 1, name: `${sensation.name} (copia)` })}>
            <Icon name="copy" /> Duplicar
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-danger text-white rounded-lg text-sm hover:bg-red-700 transition-colors" onClick={() => { if (confirm('¿Eliminar esta sensación?')) onSave(null); }}>
            <Icon name="trash" /> Eliminar
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover transition-colors" onClick={() => onSave(sensation)}>
            <Icon name="save" /> Guardar
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Info */}
        <div className="bg-bg-card border border-border rounded-lg p-5">
          <div className="flex gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted uppercase tracking-wide">ID</label>
              <input type="number" value={sensation.id} onChange={e => h('id', parseInt(e.target.value) || 0)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent w-20" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs text-text-muted uppercase tracking-wide">Nombre</label>
              <input type="text" value={sensation.name} onChange={e => h('name', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 max-sm:grid-cols-1">
            <InputField label="Frecuencia (Hz)" type="number" min={1} max={100} value={sensation.frequency} onChange={v => h('frequency', v)} />
            <InputField label="Duración" type="number" min={0} max={100} value={sensation.duration} onChange={v => h('duration', v)} />
            <InputField label="Intensidad (%)" type="number" min={0} max={100} value={sensation.intensity} onChange={v => h('intensity', v)} />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 max-sm:grid-cols-1">
            <InputField label="Ramp Up (ms)" type="number" min={0} max={200} value={sensation.rampUp} onChange={v => h('rampUp', v)} />
            <InputField label="Ramp Down (ms)" type="number" min={0} max={200} value={sensation.rampDown} onChange={v => h('rampDown', v)} />
            <InputField label="Exit Time" type="number" min={0} max={10} value={sensation.exitTime} onChange={v => h('exitTime', v)} />
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted uppercase tracking-wide">Icono</label>
              <select value={sensation.icon} onChange={e => h('icon', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent">
                {Object.entries(ICON_CATEGORIES).map(([catId, cat]) => (
                  <optgroup key={catId} label={cat.name}>
                    {cat.icons.map(icon => <option key={icon.id} value={icon.id}>{icon.name}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted uppercase tracking-wide">Grupo</label>
              <select value={sensation.group} onChange={e => h('group', e.target.value)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent">
                {GROUPS.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Right: Blocks */}
        <div className="bg-bg-card border border-border rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium">Microsensaciones ({sensation.blocks.length})</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => h('blocks', [...sensation.blocks, { sensors: [{ id: 0, intensity: 100 }], name: `Block ${sensation.blocks.length + 1}` }])}>
              <Icon name="plus" /> Agregar Micro
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {sensation.blocks.map((block, i) => (
              <BlockEditor key={i} block={block} index={i} onChange={b => { const n = [...sensation.blocks]; n[i] = b; h('blocks', n); }} onRemove={() => h('blocks', sensation.blocks.filter((_, j) => j !== i))} />
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div>
        <button className="flex items-center gap-2 px-3 py-2 bg-bg-tertiary text-text-primary border border-border rounded-lg text-sm hover:bg-bg-card transition-colors" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Ocultar Preview' : 'Mostrar Preview'}
        </button>
        {showPreview && (
          <div className="mt-4 bg-bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm text-text-muted">Vista Previa del Archivo</h4>
              <button className="px-2 py-1 bg-bg-tertiary text-text-primary border border-border rounded text-xs hover:bg-bg-card transition-colors" onClick={() => navigator.clipboard.writeText(genText(sensation))}>Copiar</button>
            </div>
            <pre className="bg-bg-primary border border-border rounded p-4 font-mono text-xs text-accent overflow-x-auto whitespace-nowrap">{genText(sensation)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ label, type, min, max, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-text-muted uppercase tracking-wide">{label}</label>
      <input type={type} min={min} max={max} value={value} onChange={e => onChange(parseInt(e.target.value) || 0)} className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent w-full" />
    </div>
  );
}

function genText(s) {
  const p = `${s.frequency},${s.duration},${s.intensity},${s.rampUp},${s.rampDown},${s.exitTime}`;
  const bs = s.blocks.map(b => {
    const ss = b.sensors.map(x => `${x.id}%${x.intensity}`).join(',');
    if (b.frequency !== undefined) return `${b.frequency},${b.duration},${b.intensity},${b.rampUp},${b.rampDown},${b.exitTime},${b.name || ''}|${ss}`;
    return ss;
  });
  return `${s.id}~${s.name}~${p},${bs.join('&')}~${s.icon}~${s.group}~#`;
}
