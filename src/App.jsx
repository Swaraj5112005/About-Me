import { ThemeProvider, useTheme } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './styles/index.css'
import './App.css'

function AppContent() {
  const { colors } = useTheme()

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
