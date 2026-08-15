import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const pages = { home: Home, courses: Courses, about: About, contact: Contact }

function getPage() {
  const page = window.location.hash.replace('#/', '') || 'home'
  return pages[page] ? page : 'home'
}

function App() {
  const [page, setPage] = useState(getPage)
  const { t } = useTranslation()
  const Page = pages[page]

  useEffect(() => {
    const changePage = () => setPage(getPage())
    window.addEventListener('hashchange', changePage)
    return () => window.removeEventListener('hashchange', changePage)
  }, [])

  const navigate = (nextPage) => {
    window.location.hash = `/${nextPage}`
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#/home" onClick={() => navigate('home')}>
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>Lingua</span>
        </a>
        <nav className="main-nav" aria-label={t('navigation.label')}>
          {Object.keys(pages).map((item) => (
            <a
              className={page === item ? 'active' : ''}
              href={`#/${item}`}
              key={item}
              onClick={() => navigate(item)}
            >
              {t(`navigation.${item}`)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </header>

      <main><Page navigate={navigate} /></main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#/home" onClick={() => navigate('home')}>
          <span className="brand-mark" aria-hidden="true">L</span><span>Lingua</span>
        </a>
        <p>{t('footer.tagline')}</p>
        <p>© {new Date().getFullYear()} Lingua Academy</p>
      </footer>
    </div>
  )
}

export default App
