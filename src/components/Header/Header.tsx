import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './styles/Header.module.scss';

/** Anchor link entry for the main navigation. */
interface NavLink {
  /** Display label rendered in the nav. */
  label: string;
  /** Hash href (e.g., "about") or absolute URL. */
  href: string;
  /** When true, opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
}

/** Navigation links rendered in the header. Hash links navigate to home page sections. */
const NAV_LINKS: NavLink[] = [
  { label: 'About', href: 'about' },
  { label: 'Apps', href: 'apps' },
  { label: 'Games', href: 'https://games.mooredevtechnologies.com', external: true },
  { label: 'Contact', href: 'contact' },
];

/** Pixel scroll threshold before the header gains the scrolled shadow style. */
const SCROLL_THRESHOLD = 20;

/**
 * Site-wide sticky header with logo mark, wordmark, and anchor navigation.
 * Gains a backdrop-blur shadow after the user scrolls past SCROLL_THRESHOLD.
 * Hash links always navigate to the home page sections.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    /** Updates scrolled state based on current vertical scroll position. */
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Renders a navigation link that either navigates to home with hash or uses an external link.
   */
  const renderNavLink = ({ label, href, external }: NavLink) => {
    if (external) {
      return (
        <a
          key={href}
          href={href}
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    // For hash links, navigate to home page with hash fragment
    const to = `/#${href}`;

    // If already on home, use native anchor for smooth scroll
    if (isHome) {
      return (
        <a
          key={href}
          href={`#${href}`}
          className={styles.navLink}
        >
          {label}
        </a>
      );
    }

    // If on another page, use Link to navigate to home with hash
    return (
      <Link
        key={href}
        to={to}
        className={styles.navLink}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink} aria-label="MooreDev Technologies LLC — back to top">
          <Logo size={28} aria-hidden="true" />
          <span className={styles.wordmark}>MooreDev Technologies LLC</span>
        </Link>
        <nav className={styles.nav} aria-label="Site navigation">
          {NAV_LINKS.map(renderNavLink)}
        </nav>
      </div>
    </header>
  );
}
