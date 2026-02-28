import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../config/portfolioData';
import '../styles/Hero.css';

export function Hero() {
  const { colors } = useTheme();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" style={{ backgroundColor: colors.background }}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 style={{ color: colors.primary }}>Hello, I'm {portfolioData.name}</h1>
          <h2 style={{ color: colors.accent }}>{portfolioData.title}</h2>
          <p style={{ color: colors.textSecondary }}>{portfolioData.bio}</p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={scrollToContact}
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              }}
            >
              Get In Touch
            </button>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                borderColor: colors.accent,
                color: colors.accent,
              }}
            >
              View GitHub
            </a>
          </div>

          <div className="social-links">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ color: colors.primary }}
              title="GitHub"
            >
              <i className="icon">🔗</i>
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ color: colors.primary }}
              title="LinkedIn"
            >
              <i className="icon">💼</i>
            </a>
            <a
              href={`mailto:${portfolioData.social.email}`}
              className="social-icon"
              style={{ color: colors.primary }}
              title="Email"
            >
              <i className="icon">📧</i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder" style={{ borderColor: colors.primary }}>
            <img src="https://via.placeholder.com/300x300?text=Your+Photo" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
