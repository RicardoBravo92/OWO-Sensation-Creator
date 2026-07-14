import Icon from '../Icon';

const menuItems = [
  { id: 'editor', label: 'Editor', icon: 'plus' },
  { id: 'templates', label: 'Plantillas', icon: 'list' },
  { id: 'prompt', label: 'Prompt IA', icon: 'magic' },
  { id: 'import', label: 'Importar', icon: 'file-import' },
  { id: 'export', label: 'Exportar', icon: 'file-export' },
];

export default function Sidebar({ activeView, onViewChange, isOpen }) {
  return (
    <aside className={`
      bg-bg-secondary border-r border-border transition-all duration-300 overflow-hidden
      ${isOpen ? 'w-52' : 'w-0 -translate-x-52'}
      max-md:fixed max-md:top-[52px] max-md:left-0 max-md:bottom-0 max-md:z-40 max-md:w-52
      ${!isOpen ? 'max-md:-translate-x-52' : ''}
    `}>
      <nav className="py-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
              activeView === item.id
                ? 'bg-accent-light text-accent border-r-[3px] border-accent'
                : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
            }`}
            onClick={() => onViewChange(item.id)}
          >
            <Icon name={item.icon} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
