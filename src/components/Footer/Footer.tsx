import { Link, useLocation } from 'react-router-dom';
import styles from './styles/Footer.module.scss';

/** Current year, computed once at module load time. */
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Site footer with copyright notice and navigation.
 * Hash links navigate to home page sections regardless of current page.
 */
export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  /**
   * Renders a navigation link for footer, handling both hash and route navigation.
   */
  const renderLink = (label: string, href: string) => {
    // Check if it's a hash link to a home page section
    const isHashLink = href.startsWith('#');

    if (!isHashLink) {
      // Regular route link
      return (
        <Link key={href} to={href} className={styles.link}>
          {label}
        </Link>
      );
    }

    // Hash link behavior
    if (isHome) {
      // On home page, use native anchor for smooth scroll
      return (
        <a key={href} href={href} className={styles.link}>
          {label}
        </a>
      );
    }

    // On other pages, navigate to home with hash
    return (
      <Link key={href} to={`/${href}`} className={styles.link}>
        {label}
      </Link>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          &copy; {CURRENT_YEAR} MooreDev Technologies LLC. All rights reserved.
        </span>
        <nav className={styles.nav} aria-label="Footer navigation">
          {renderLink('About', '#about')}
          {renderLink('Apps', '#apps')}
          <a
            href="https://games.mooredevtechnologies.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Games
          </a>
          {renderLink('Contact', '#contact')}
          {renderLink('Privacy Policy', '/privacy-policy')}
        </nav>
      </div>
    </footer>
  );
}
