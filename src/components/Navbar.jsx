import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

export function Navbar() {
  const { colors, theme, toggleTheme, availableThemes } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar" style={{ backgroundColor: colors.surface, borderBottom: `2px solid ${colors.primary}` }}>
      <div className="navbar-container">
        <div className="navbar-brand" style={{ color: colors.primary }}>
          Portfolio
        </div>

        <div className="navbar-menu">
          <button onClick={() => scrollToSection('hero')} className="nav-link" style={{ color: colors.text }}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link" style={{ color: colors.text }}>
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link" style={{ color: colors.text }}>
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link" style={{ color: colors.text }}>
            Contact
          </button>
        </div>

        <div className="theme-switcher">
          {availableThemes.map((t) => (
            <button
              key={t}
              onClick={() => toggleTheme(t)}
              className={`theme-btn ${theme === t ? 'active' : ''}`}
              style={{
                backgroundColor: theme === t ? colorThemes[t].primary : 'transparent',
                borderColor: colorThemes[t].primary,
                color: theme === t ? '#fff' : colors.text,
              }}
              title={t}
            >
              {t.charAt(0).toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

const colorThemes = {
  blue: { primary: '#3B82F6' },
  purple: { primary: '#A855F7' },
  green: { primary: '#10B981' },
  orange: { primary: '#F97316' },
  pink: { primary: '#EC4899' },
};
