import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../config/portfolioData';
import '../styles/Contact.css';

export function Contact() {
  const { colors } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact" style={{ backgroundColor: colors.surface }}>
      <div className="contact-container">
        <h2 className="section-title" style={{ color: colors.primary }}>
          {portfolioData.contact.heading}
        </h2>

        <p className="contact-message" style={{ color: colors.text }}>
          {portfolioData.contact.message}
        </p>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.primary,
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.primary,
                }}
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.primary,
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              }}
            >
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3 style={{ color: colors.accent }}>Connect With Me</h3>

            <div className="info-item">
              <span style={{ color: colors.primary }}>📧 Email</span>
              <a
                href={`mailto:${portfolioData.social.email}`}
                style={{ color: colors.text }}
              >
                {portfolioData.social.email}
              </a>
            </div>

            <div className="info-item">
              <span style={{ color: colors.primary }}>💼 LinkedIn</span>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
              >
                Visit Profile
              </a>
            </div>

            <div className="info-item">
              <span style={{ color: colors.primary }}>🔗 GitHub</span>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
              >
                Visit Profile
              </a>
            </div>

            <div className="info-item">
              <span style={{ color: colors.primary }}>📄 Resume</span>
              <a
                href={portfolioData.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
