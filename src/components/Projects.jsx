import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../config/portfolioData';
import '../styles/Projects.css';

export function Projects() {
  const { colors } = useTheme();

  return (
    <section id="projects" className="projects" style={{ backgroundColor: colors.background }}>
      <div className="projects-container">
        <h2 className="section-title" style={{ color: colors.primary }}>
          My Projects
        </h2>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{ backgroundColor: colors.surface, borderColor: colors.primary }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 style={{ color: colors.accent }}>{project.title}</h3>
                <p style={{ color: colors.textSecondary }}>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="tech-badge"
                      style={{
                        backgroundColor: colors.primary,
                        color: '#fff',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{
                      color: colors.accent,
                      borderColor: colors.accent,
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{
                      color: colors.primary,
                      borderColor: colors.primary,
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
