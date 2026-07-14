import { createContext, useContext, useState, useCallback } from 'react';
import es from './es.json';
import en from './en.json';

const translations = { es, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('owo-lang');
    return saved === 'es' ? 'es' : 'en';
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('owo-lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (path) => {
      const keys = path.split('.');
      let value = translations[lang];
      for (const key of keys) {
        value = value?.[key];
      }
      return value ?? path;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
