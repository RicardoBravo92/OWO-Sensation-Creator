import Icon from '../Icon';
import { useLanguage } from '../../i18n/LanguageContext';

export default function TemplateCard({ template, onSelect, isSelected }) {
  const { t } = useLanguage();
  const blockCount = template.sensation.blocks.length;
  return (
    <div className={`bg-bg-card border rounded-lg p-4 cursor-pointer transition-all hover:border-accent hover:-translate-y-0.5 ${isSelected ? 'border-success bg-green-900/10' : 'border-border'}`} onClick={() => onSelect(template)}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-text-primary">{t(`templateData.${template.id}.name`)}</h4>
        {isSelected && <Icon name="check" className="text-success" />}
      </div>
      <p className="text-xs text-text-muted mb-3">{t(`templateData.${template.id}.desc`)}</p>
      <div className="flex gap-2 flex-wrap">
        <span className="bg-bg-tertiary px-2 py-0.5 rounded text-[11px] text-text-secondary">{template.sensation.frequency}Hz</span>
        <span className="bg-bg-tertiary px-2 py-0.5 rounded text-[11px] text-text-secondary">{template.sensation.intensity}%</span>
        <span className="bg-bg-tertiary px-2 py-0.5 rounded text-[11px] text-text-secondary">{blockCount} {blockCount !== 1 ? t('templates.blocksPlural') : t('templates.blocks')}</span>
      </div>
    </div>
  );
}
