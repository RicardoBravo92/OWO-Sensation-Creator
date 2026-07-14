import { useState } from 'react';
import Icon from '../Icon';
import { generateSensationFromPrompt } from '../../utils/ai';

const EXAMPLES = [
  'Golpe fuerte en el pecho', 'Abrazo suave y envolvente', 'Viento en la espalda',
  'Choque frontal fuerte', 'Latido del corazón', 'Salto con aterrizaje',
  'Corte de espada diagonal', 'Fuego en todo el cuerpo', 'Curación ascendente', 'Nitro de aceleración',
];

export default function PromptCreator({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

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
        <h2 className="text-xl flex items-center gap-2 mb-1"><Icon name="magic" /> Prompt IA</h2>
        <p className="text-sm text-text-muted">Describe la sensación que quieres crear en lenguaje natural</p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ejemplo: Golpe fuerte en el pecho con vibración intensa..." rows={4} className="bg-bg-card border border-border rounded-lg p-4 text-text-primary text-base resize-y min-h-[100px] focus:outline-none focus:border-accent placeholder:text-text-muted" />
        <button className="self-start flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-base hover:bg-accent-hover transition-colors disabled:opacity-50" onClick={handle} disabled={!prompt.trim() || loading}>
          {loading ? <><Icon name="spinner" className="animate-spin-slow" /> Generando...</> : <><Icon name="magic" /> Generar Sensación</>}
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-sm text-text-muted mb-3">Ejemplos de prompts:</h4>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((ex, i) => (
            <button key={i} className="bg-bg-card border border-border rounded-full px-3 py-1.5 text-xs text-text-secondary hover:border-accent hover:text-accent transition-colors" onClick={() => setPrompt(ex)}>{ex}</button>
          ))}
        </div>
      </div>

      <div className="bg-bg-card border border-border rounded-lg p-4">
        <h4 className="text-sm text-text-muted mb-2">Consejos:</h4>
        <ul className="list-none p-0 m-0">
          {[
            ['Zona:', 'frente, espalda, brazos, todo el cuerpo'],
            ['Intensidad:', 'suave, medio, fuerte'],
            ['Tipo:', 'golpe, corte, fuego, viento, abrazo, etc.'],
            ['Dirección:', 'ascendente, descendente, lateral'],
          ].map(([k, v]) => <li key={k} className="text-xs text-text-secondary py-0.5"><strong className="text-text-primary">{k}</strong> {v}</li>)}
        </ul>
      </div>
    </div>
  );
}
