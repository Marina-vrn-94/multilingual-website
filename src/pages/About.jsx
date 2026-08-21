import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true })

  return (
    <section className="page-section section-wrap">
      <div className="split-heading">
        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h1>{t('about.title')}</h1>
        </div>
        <p className="lead">{t('about.description')}</p>
      </div>

      <div className="quote-panel">
        <p>“{t('about.quote')}”</p>
        <span>{t('about.quoteBy')}</span>
      </div>

      <div className="values">
        <p className="eyebrow">{t('about.valuesLabel')}</p>
        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
