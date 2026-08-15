import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <label className="language-switcher">
      <span className="sr-only">{t('language.label')}</span>
      <select
        value={i18n.resolvedLanguage || 'en'}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        aria-label={t('language.label')}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="ru">Русский</option>
      </select>
    </label>
  )
}

export default LanguageSwitcher
