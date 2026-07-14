import { useState, useRef } from 'react';
import Icon from '../Icon';
import { parseOwoFile } from '../../utils/parser';

export default function FileImporter({ onImport }) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const ref = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    const content = await file.text();
    const sensations = parseOwoFile(content);
    setFileName(file.name);
    onImport(sensations, file.name);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl flex items-center gap-2 mb-1"><Icon name="file-import" /> Importar Archivo</h2>
        <p className="text-sm text-text-muted">Arrastra un archivo .owo o .authowo o haz clic para seleccionar</p>
      </div>
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${isDragging ? 'border-accent bg-accent-light' : 'border-border hover:border-accent hover:bg-accent-light'}`}
        onDrop={e => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => ref.current?.click()}
      >
        <Icon name="upload" className="text-4xl text-text-muted mb-4" />
        <p className="text-sm text-text-secondary">{fileName ? `Archivo cargado: ${fileName}` : 'Arrastra el archivo aquí o haz clic para seleccionar'}</p>
        <span className="block mt-2 text-xs text-text-muted">Formatos soportados: .owo, .authowo</span>
        <input ref={ref} type="file" accept=".owo,.authowo" onChange={e => handleFile(e.target.files[0])} className="hidden" />
      </div>
    </div>
  );
}
