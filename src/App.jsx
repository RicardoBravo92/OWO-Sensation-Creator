import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import SensationEditor from './components/Editor/SensationEditor';
import TemplateList from './components/Templates/TemplateList';
import PromptCreator from './components/Prompt/PromptCreator';
import FileImporter from './components/FileManager/FileImporter';
import FileExporter from './components/FileManager/FileExporter';
import { createEmptySensation, generateNewId } from './utils/serializer';
import { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  const [activeView, setActiveView] = useState('editor');
  const [menuOpen, setMenuOpen] = useState(true);
  const [sensations, setSensations] = useState([]);
  const [currentSensation, setCurrentSensation] = useState(createEmptySensation(0));
  const [currentFileName, setCurrentFileName] = useState('');

  const handleSave = (sensation) => {
    if (!sensation) { handleDeleteSensation(); return; }
    const idx = sensations.findIndex(s => s.id === sensation.id);
    if (idx >= 0) {
      const n = [...sensations]; n[idx] = sensation; setSensations(n);
    } else {
      setSensations([...sensations, sensation]);
    }
    setCurrentSensation(sensation);
  };

  const handleDeleteSensation = () => {
    const n = sensations.filter(s => s.id !== currentSensation.id);
    setSensations(n);
    setCurrentSensation(n.length > 0 ? n[0] : createEmptySensation(0));
  };

  const handleSelectTemplate = (template) => {
    setCurrentSensation({ ...template.sensation, id: generateNewId(sensations), name: template.name });
    setActiveView('editor');
  };

  const handleGenerateFromPrompt = (sensation) => {
    sensation.id = generateNewId(sensations);
    setCurrentSensation(sensation);
    setActiveView('editor');
  };

  const handleImport = (importedSensations, fileName) => {
    const existing = [...sensations];
    let nextId = generateNewId(existing);
    const renamed = importedSensations.map(s => {
      const id = nextId++;
      return { ...s, id };
    });
    setSensations([...existing, ...renamed]);
    setCurrentFileName(fileName);
    if (renamed.length > 0) setCurrentSensation(renamed[0]);
    setActiveView('editor');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeView={activeView} onViewChange={setActiveView} isOpen={menuOpen} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {activeView === 'editor' && (
              <div className="flex flex-col gap-6">
                {sensations.length > 0 && (
                  <div className="flex gap-2 flex-wrap pb-2 border-b border-border">
                    {sensations.map(s => (
                      <button
                        key={s.id}
                        className={`px-3 py-1.5 rounded-t-lg text-sm border transition-colors ${
                          currentSensation.id === s.id
                            ? 'bg-accent-light text-accent border-accent'
                            : 'bg-bg-tertiary text-text-secondary border-border hover:bg-bg-card hover:text-text-primary'
                        }`}
                        onClick={() => setCurrentSensation(s)}
                      >
                        {s.name}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1.5 text-sm border border-dashed border-border text-text-muted hover:border-accent hover:text-accent rounded-t-lg transition-colors"
                      onClick={() => setCurrentSensation(createEmptySensation(generateNewId(sensations)))}
                    >+</button>
                  </div>
                )}
                <SensationEditor sensation={currentSensation} onChange={setCurrentSensation} onSave={handleSave} />
              </div>
            )}
            {activeView === 'templates' && <TemplateList onSelectTemplate={handleSelectTemplate} />}
            {activeView === 'prompt' && <PromptCreator onGenerate={handleGenerateFromPrompt} />}
            {activeView === 'import' && <FileImporter onImport={handleImport} />}
            {activeView === 'export' && <FileExporter sensations={sensations} currentFileName={currentFileName} />}
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
