import Icon from '../Icon';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Header({ onMenuToggle, menuOpen }) {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <header className="bg-bg-secondary border-b border-border px-4 md:px-6 py-3 flex items-center gap-3 sticky top-0 z-50">
      <button
        className="p-2 rounded-lg text-text-primary hover:bg-bg-tertiary transition-colors"
        onClick={onMenuToggle}
      >
        {menuOpen ? <Icon name="times" /> : <Icon name="bars" />}
      </button>
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-accent">{t('app.title')}</h1>
        <span className="text-xs text-text-muted hidden sm:inline">{t('app.subtitle')}</span>
      </div>
      <button
        className="px-3 py-1.5 rounded-lg text-sm border border-border bg-bg-tertiary text-text-secondary hover:bg-bg-card hover:text-text-primary transition-colors font-medium"
        onClick={toggleLang}
        title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
    </header>
  );
}
