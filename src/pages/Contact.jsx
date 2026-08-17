import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page-section section-wrap contact-page">
      <div>
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h1>{t('contact.title')}</h1>
        <p className="lead">{t('contact.description')}</p>

        <div className="contact-details">
          <div>
            <span>{t('contact.emailLabel')}</span>
            <a href="mailto:hello@lingua.example">hello@lingua.example</a>
          </div>
          <div>
            <span>{t('contact.hoursLabel')}</span>
            <p>{t('contact.hours')}</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {t('contact.name')}
          <input type="text" name="name" />
        </label>

        <label>
          {t('contact.email')}
          <input type="email" name="email" />
        </label>

        <label>
          {t('contact.message')}
          <textarea name="message" rows="5" />
        </label>

        <button type="submit" className="button primary">{t('contact.send')}</button>
        {submitted && <p className="form-success">{t('contact.success')}</p>}
      </form>
    </section>
  )
}

export default Contact
