import { useState, useRef } from 'react';
import Icon from '../Icon';
import { parseOwoFile } from '../../utils/parser';
import { useLanguage } from '../../i18n/LanguageContext';

export default function FileImporter({ onImport }) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [rawText, setRawText] = useState('');
  const [error, setError] = useState('');
  const ref = useRef(null);
  const { t } = useLanguage();

  const handleFile = async (file) => {
    if (!file) return;
    const content = await file.text();
    setRawText(content);
    const sensations = parseOwoFile(content);
    setFileName(file.name);
    setError(sensations.length === 0 ? 'No valid sensations found' : '');
    onImport(sensations, file.name);
  };

  const handleParse = () => {
    if (!rawText.trim()) {
      setError('Paste a .owo or .authowo line first');
      return;
    }
    const sensations = parseOwoFile(rawText);
    if (sensations.length === 0) {
      setError('Invalid format. Use: ID~Name~Params|Sensors~Icon~Group~#');
      return;
    }
    setError('');
    setFileName('pasted-text');
    onImport(sensations, 'pasted-text');
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl flex items-center gap-2 mb-1"><Icon name="file-import" /> {t('import.title')}</h2>
        <p className="text-sm text-text-muted">{t('import.subtitle')}</p>
      </div>

      {/* Drop zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${isDragging ? 'border-accent bg-accent-light' : 'border-border hover:border-accent hover:bg-accent-light'}`}
        onDrop={e => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => ref.current?.click()}
      >
        <Icon name="upload" className="text-4xl text-text-muted mb-4" />
        <p className="text-sm text-text-secondary">{fileName ? `${t('import.loaded')} ${fileName}` : t('import.drag')}</p>
        <span className="block mt-2 text-xs text-text-muted">{t('import.formats')}</span>
        <input ref={ref} type="file" accept=".owo,.authowo" onChange={e => handleFile(e.target.files[0])} className="hidden" />
      </div>

      {/* Paste text area */}
      <div className="mt-6 bg-bg-card border border-border rounded-lg p-5">
        <h4 className="text-sm font-medium mb-3">{t('import.pasteTitle')}</h4>
        <textarea
          value={rawText}
          onChange={e => { setRawText(e.target.value); setError(''); }}
          placeholder={t('import.pastePlaceholder')}
          rows={4}
          className="w-full bg-bg-primary border border-border rounded-lg px-3 py-2 text-text-primary text-xs font-mono focus:outline-none focus:border-accent resize-none"
        />
        {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
        <button
          onClick={handleParse}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white rounded-lg text-sm hover:bg-accent-hover transition-colors"
        >
          <Icon name="file-import" /> {t('import.parsePaste')}
        </button>
      </div>
    </div>
  );
}
