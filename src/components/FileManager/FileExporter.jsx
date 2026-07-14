import { useState } from 'react';
import Icon from '../Icon';
import { saveAs } from 'file-saver';
import { serializeAuthowoFile, serializeOwoFile } from '../../utils/serializer';

export default function FileExporter({ sensations, currentFileName }) {
  const [exportType, setExportType] = useState('authowo');
  const [fileName, setFileName] = useState(currentFileName || 'my-sensations');

  const handleExport = () => {
    let content, filename;
    if (exportType === 'authowo') {
      content = serializeAuthowoFile(sensations);
      filename = `${fileName}.authowo`;
    } else {
      if (sensations.length === 1) {
        content = serializeOwoFile(sensations[0]);
        filename = `${sensations[0].name.toLowerCase().replace(/\s+/g, '-')}.owo`;
      } else {
        content = serializeAuthowoFile(sensations);
        filename = `${fileName}.authowo`;
      }
    }
    saveAs(new Blob([content], { type: 'text/plain;charset=utf-8' }), filename);
  };

  const handleSingle = (s) => {
    const content = serializeOwoFile(s);
    saveAs(new Blob([content], { type: 'text/plain;charset=utf-8' }), `${s.name.toLowerCase().replace(/\s+/g, '-')}.owo`);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl flex items-center gap-2 mb-1"><Icon name="file-export" /> Exportar</h2>
        <p className="text-sm text-text-muted">Exporta tus sensaciones en formato OWO</p>
      </div>

      <div className="bg-bg-card border border-border rounded-lg p-5 mb-6">
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-xs text-text-muted uppercase tracking-wide">Tipo de archivo</label>
          <div className="flex flex-col gap-2 mt-1">
            {[['authowo', '.authowo (Grupo de sensaciones)'], ['owo', '.owo (Sensación individual)']].map(([v, l]) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer text-sm text-text-secondary">
                <input type="radio" value={v} checked={exportType === v} onChange={e => setExportType(e.target.value)} className="accent-accent" />
                {l}
              </label>
            ))}
          </div>
        </div>

        {exportType === 'authowo' && (
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-xs text-text-muted uppercase tracking-wide">Nombre del archivo</label>
            <div className="flex">
              <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} placeholder="nombre-del-juego" className="flex-1 bg-bg-primary border border-border rounded-l-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent" />
              <span className="bg-bg-tertiary border border-border border-l-0 rounded-r-lg px-3 py-2 text-text-muted text-sm">.authowo</span>
            </div>
          </div>
        )}

        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover transition-colors disabled:opacity-50" onClick={handleExport} disabled={sensations.length === 0}>
          <Icon name="download" /> Exportar {exportType === 'authowo' ? 'Grupo' : 'Sensación'}
        </button>
      </div>

      <div className="bg-bg-card border border-border rounded-lg p-5">
        <h4 className="text-sm text-text-muted mb-3">Sensaciones a exportar ({sensations.length})</h4>
        <div className="flex flex-col gap-2">
          {sensations.map((s, i) => (
            <div key={i} className="flex items-center gap-4 px-3 py-2 bg-bg-primary rounded-lg">
              <span className="flex-1 text-sm">{s.name}</span>
              <span className="text-xs text-text-muted">{s.frequency}Hz | {s.intensity}%</span>
              <button className="flex items-center gap-1 px-2 py-1 bg-bg-tertiary text-text-primary border border-border rounded text-xs hover:bg-bg-card transition-colors" onClick={() => handleSingle(s)}>
                <Icon name="download" /> .owo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
