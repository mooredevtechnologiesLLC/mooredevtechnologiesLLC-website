import styles from './styles/Footer.module.scss';

/** Current year, computed once at module load time. */
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Site footer with copyright notice and anchor navigation.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          &copy; {CURRENT_YEAR} MooreDev Technologies LLC. All rights reserved.
        </span>
        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#about" className={styles.link}>About</a>
          <a href="#apps" className={styles.link}>Apps</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
