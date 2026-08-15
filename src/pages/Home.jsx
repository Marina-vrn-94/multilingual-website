import { useTranslation } from 'react-i18next'

function Home({ navigate }) {
  const { t } = useTranslation()
  const highlights = t('home.highlights', { returnObjects: true })

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p className="lead">{t('home.description')}</p>
          <div className="actions">
            <button className="button primary" onClick={() => navigate('courses')}>{t('home.explore')}</button>
            <button className="button text-button" onClick={() => navigate('about')}>{t('home.story')} <span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="word-card word-one">hello</div>
          <div className="word-card word-two">hallo</div>
          <div className="word-card word-three">привет</div>
          <div className="globe">◎</div>
        </div>
      </section>
      <section className="highlights section-wrap">
        {highlights.map((item) => <article className="highlight" key={item.title}><strong>{item.number}</strong><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </section>
      <section className="intro-band">
        <p className="eyebrow">{t('home.featuredLabel')}</p>
        <h2>{t('home.featuredTitle')}</h2>
        <button className="button outline" onClick={() => navigate('courses')}>{t('home.viewCourses')}</button>
      </section>
    </>
  )
}

export default Home
