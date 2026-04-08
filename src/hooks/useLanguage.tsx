import { useState, useCallback, createContext, useContext, ReactNode } from 'react';
import { type Lang, translations, type Translations } from '../constants/translations';

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'sr',
  t: translations.sr,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    return saved === 'en' ? 'en' : 'sr';
  });

  const toggleLang = useCallback(() => {
    setLang(l => {
      const next: Lang = l === 'sr' ? 'en' : 'sr';
      localStorage.setItem('lang', next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
