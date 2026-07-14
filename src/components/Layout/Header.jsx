import Icon from '../Icon';

export default function Header({ onMenuToggle, menuOpen }) {
  return (
    <header className="bg-bg-secondary border-b border-border px-4 md:px-6 py-3 flex items-center gap-3 sticky top-0 z-50">
      <button
        className="p-2 rounded-lg text-text-primary hover:bg-bg-tertiary transition-colors"
        onClick={onMenuToggle}
      >
        {menuOpen ? <Icon name="times" /> : <Icon name="bars" />}
      </button>
      <div>
        <h1 className="text-lg font-semibold text-accent">OWO Sensation Creator</h1>
        <span className="text-xs text-text-muted hidden sm:inline">Crea y personaliza sensaciones hápticas</span>
      </div>
    </header>
  );
}
