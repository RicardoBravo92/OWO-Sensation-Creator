import { useState } from 'react';
import Icon from '../Icon';
import { generateSensationFromPrompt } from '../../utils/ai';
import { useLanguage } from '../../i18n/LanguageContext';

export default function PromptCreator({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const examples = t('examples');

  const handle = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    onGenerate(generateSensationFromPrompt(prompt));
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl flex items-center gap-2 mb-1"><Icon name="magic" /> {t('prompt.title')}</h2>
        <p className="text-sm text-text-muted">{t('prompt.subtitle')}</p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder={t('prompt.placeholder')} rows={4} className="bg-bg-card border border-border rounded-lg p-4 text-text-primary text-base resize-y min-h-[100px] focus:outline-none focus:border-accent placeholder:text-text-muted" />
        <button className="self-start flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-base hover:bg-accent-hover transition-colors disabled:opacity-50" onClick={handle} disabled={!prompt.trim() || loading}>
          {loading ? <><Icon name="spinner" className="animate-spin-slow" /> {t('prompt.generating')}</> : <><Icon name="magic" /> {t('prompt.generate')}</>}
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-text-muted mb-3">{t('prompt.examples')}</h4>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex, i) => (
            <button key={i} className="bg-bg-card border border-border rounded-full px-3 py-1.5 text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors" onClick={() => setPrompt(ex)}>{ex}</button>
          ))}
        </div>
      </div>

      <div className="bg-bg-card border border-border rounded-lg p-4">
        <h4 className="text-sm text-text-muted mb-2">{t('prompt.tips')}</h4>
        <ul className="list-none p-0 m-0">
          {[
            [t('prompt.zone'), t('prompt.zoneDesc')],
            [t('prompt.intensityLabel'), t('prompt.intensityDesc')],
            [t('prompt.type'), t('prompt.typeDesc')],
            [t('prompt.direction'), t('prompt.directionDesc')],
          ].map(([k, v]) => <li key={k} className="text-xs text-text-secondary py-0.5"><strong className="text-text-primary">{k}</strong> {v}</li>)}
        </ul>
      </div>
    </div>
  );
}
