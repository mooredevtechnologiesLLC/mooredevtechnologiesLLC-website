import { useNavigate, useLocation } from 'react-router-dom';
import styles from './styles/LanguageSelector.module.scss';
import { LANGUAGES, type LanguageCode } from '../../pages/PrivacyPolicy/translations';

/** Props for LanguageSelector component */
interface LanguageSelectorProps {
  /** Currently selected language code */
  currentLanguage: LanguageCode;
}

/**
 * Language selector dropdown component.
 * Allows users to switch between different language versions of a page.
 */
export default function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Handle language selection change.
   * Updates the URL query parameter and navigates to the new language version.
   */
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value as LanguageCode;
    const params = new URLSearchParams(location.search);

    if (newLang === 'en') {
      // Remove lang parameter for English (default)
      params.delete('lang');
    } else {
      params.set('lang', newLang);
    }

    const newSearch = params.toString();
    const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;
    navigate(newPath);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="language-selector" className={styles.label}>
        Language:
      </label>
      <select
        id="language-selector"
        value={currentLanguage}
        onChange={handleLanguageChange}
        className={styles.select}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}
