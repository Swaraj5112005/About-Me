import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../config/portfolioData';
import '../styles/About.css';

export function About() {
  const { colors } = useTheme();

  return (
    <section id="about" className="about" style={{ backgroundColor: colors.surface }}>
      <div className="about-container">
        <h2 className="section-title" style={{ color: colors.primary }}>
          {portfolioData.about.heading}
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p style={{ color: colors.text }}>
              {portfolioData.about.description}
            </p>
          </div>

          <div className="skills-section">
            <h3 style={{ color: colors.accent }}>My Skills</h3>
            <div className="skills-grid">
              {portfolioData.about.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-tag"
                  style={{
                    backgroundColor: colors.primary,
                    color: '#fff',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
