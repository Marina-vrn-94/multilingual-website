import {useTranslation} from 'react-i18next';

function About({navigate}) {
    const {t} = useTranslation()
    const highlights = t('about.highlights', {returnObjects: true})

    return (
        <>
        <section className="about-section">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
        </section>
        </>
    )
}

export default About