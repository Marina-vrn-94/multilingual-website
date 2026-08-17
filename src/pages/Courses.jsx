import { useTranslation } from 'react-i18next'

function Courses() {
  const { t } = useTranslation()

  return (
    <section className="page-section section-wrap">
      <div className="page-lead">
        <p className="eyebrow">{t('courses.eyebrow')}</p>
        <h1>{t('courses.title')}</h1>
        <p className="lead">{t('courses.description')}</p>
      </div>

      <div className="course-grid">
        {t('courses.items', { returnObjects: true }).map((course) => (
          <article className="course-card" key={course.title}>
            <div className="course-level">{course.level}</div>
            <h2>{course.title}</h2>
            <p>{course.text}</p>
            <div className="course-meta">
              <span>{course.length}</span>
              <span>{course.format}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Courses
