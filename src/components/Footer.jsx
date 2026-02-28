import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

export function Footer() {
  const { colors } = useTheme();

  return (
    <footer className="footer" style={{ backgroundColor: colors.surface, borderTop: `2px solid ${colors.primary}` }}>
      <div className="footer-content">
        <p style={{ color: colors.text }}>
          © 2024 Portfolio. Built with React & ❤️
        </p>
        <p style={{ color: colors.textSecondary }}>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
