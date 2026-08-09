import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles/PrivacyPolicy.module.scss';
import { SUPPORT_EMAIL } from '../../constants';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import {
  PRIVACY_POLICY_TRANSLATIONS,
  type LanguageCode,
} from './translations';

/** Apple privacy policy URL */
const APPLE_PRIVACY_URL = 'https://www.apple.com/legal/privacy/';

/**
 * Privacy Policy page for MooreDev Technologies apps.
 * Describes data collection practices (none).
 * Supports multiple languages via URL query parameter (?lang=es).
 */
export default function PrivacyPolicy() {
  const [searchParams] = useSearchParams();

  /**
   * Get the current language from URL parameters.
   * Defaults to English if not specified or if invalid language code.
   */
  const currentLanguage: LanguageCode = useMemo(() => {
    const langParam = searchParams.get('lang');
    if (
      langParam &&
      ['en', 'es', 'fr', 'ja', 'de'].includes(langParam)
    ) {
      return langParam as LanguageCode;
    }
    return 'en';
  }, [searchParams]);

  // Get the translated content for the current language
  const content = PRIVACY_POLICY_TRANSLATIONS[currentLanguage];

  // Scroll to top when component mounts or language changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLanguage]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LanguageSelector currentLanguage={currentLanguage} />

        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.updated}>
          {content.lastUpdated}: {content.lastUpdatedDate}
        </p>

        <section className={styles.section}>
          <h2>{content.overview.title}</h2>
          <p>{content.overview.paragraph1}</p>
          <p className={styles.highlight}>{content.overview.highlight}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.dataWeDoNotCollect.title}</h2>
          <p>{content.dataWeDoNotCollect.paragraph1}</p>
          <ul>
            {content.dataWeDoNotCollect.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{content.dataWeDoNotCollect.paragraph2}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.applePlatformServices.title}</h2>
          <p>
            {content.applePlatformServices.paragraph1.text1}
            <a
              href={APPLE_PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {content.applePlatformServices.paragraph1.linkText}
            </a>
            {content.applePlatformServices.paragraph1.text2}
          </p>
          <p>{content.applePlatformServices.paragraph2}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.inAppPurchases.title}</h2>
          <p>{content.inAppPurchases.paragraph}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.childrensPrivacy.title}</h2>
          <p>{content.childrensPrivacy.paragraph}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.changesToPolicy.title}</h2>
          <p>{content.changesToPolicy.paragraph}</p>
        </section>

        <section className={styles.section}>
          <h2>{content.contactUs.title}</h2>
          <p>
            {content.contactUs.paragraph.text}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.link}>
              {content.contactUs.paragraph.linkText}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
