import { useState } from 'react';
import Icon from '../Icon';
import TemplateCard from './TemplateCard';
import { TEMPLATES } from '../../data/templates';
import { useLanguage } from '../../i18n/LanguageContext';

export default function TemplateList({ onSelectTemplate }) {
  const [expanded, setExpanded] = useState('weapons');
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">{t('templates.title')}</h2>
        <p className="text-sm text-text-muted">{t('templates.subtitle')}</p>
      </div>
      <div className="flex flex-col gap-3">
        {Object.entries(TEMPLATES).map(([catId, cat]) => (
          <div key={catId}>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary cursor-pointer transition-colors hover:bg-bg-tertiary" onClick={() => setExpanded(expanded === catId ? null : catId)}>
              <span className="text-lg">{cat.icon}</span>
              <span className="flex-1 text-left font-medium text-sm">{t(`templateData.${catId}`)}</span>
              <span className="bg-bg-tertiary px-2 py-0.5 rounded-full text-xs text-text-muted">{cat.templates.length}</span>
              <Icon name={expanded === catId ? 'chev-up' : 'chev-down'} />
            </button>
            {expanded === catId && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                {cat.templates.map(t2 => <TemplateCard key={t2.id} template={t2} onSelect={onSelectTemplate} />)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
