export type Lang = 'EN' | 'TR';

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'EN';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'EN' || saved === 'TR') return saved;
  return navigator.language?.startsWith('tr') ? 'TR' : 'EN';
}

export const lang = $state({ current: getInitialLang() });
