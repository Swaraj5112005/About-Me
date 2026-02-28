import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const colorThemes = {
  blue: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    accent: '#0EA5E9',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
  purple: {
    primary: '#A855F7',
    secondary: '#7E22CE',
    accent: '#D946EF',
    background: '#1E1B4B',
    surface: '#312E81',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
  green: {
    primary: '#10B981',
    secondary: '#059669',
    accent: '#34D399',
    background: '#064E3B',
    surface: '#047857',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
  orange: {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#FB923C',
    background: '#431407',
    surface: '#7C2D12',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
  pink: {
    primary: '#EC4899',
    secondary: '#BE185D',
    accent: '#F472B6',
    background: '#500724',
    surface: '#831843',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('blue');
  const currentTheme = colorThemes[theme];

  const toggleTheme = (newTheme) => {
    if (colorThemes[newTheme]) {
      setTheme(newTheme);
    }
  };

  const value = {
    theme,
    colors: currentTheme,
    toggleTheme,
    availableThemes: Object.keys(colorThemes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
