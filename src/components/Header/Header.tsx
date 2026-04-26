import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import styles from './styles/Header.module.scss';

/** Anchor link entry for the main navigation. */
interface NavLink {
  /** Display label rendered in the nav. */
  label: string;
  /** Hash href pointing to a page section id. */
  href: string;
}

/** Navigation links rendered in the header. */
const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Apps', href: '#apps' },
  { label: 'Contact', href: '#contact' },
];

/** Pixel scroll threshold before the header gains the scrolled shadow style. */
const SCROLL_THRESHOLD = 20;

/**
 * Site-wide sticky header with logo mark, wordmark, and anchor navigation.
 * Gains a backdrop-blur shadow after the user scrolls past SCROLL_THRESHOLD.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /** Updates scrolled state based on current vertical scroll position. */
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logoLink} aria-label="MooreDev Technologies LLC — back to top">
          <Logo size={28} aria-hidden="true" />
          <span className={styles.wordmark}>MooreDev Technologies LLC</span>
        </a>
        <nav className={styles.nav} aria-label="Site navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
