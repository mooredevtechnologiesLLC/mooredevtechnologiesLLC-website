import Logo from '../Logo/Logo';
import styles from './styles/Hero.module.scss';

/**
 * Full-viewport landing section with the brand logo mark, company name, tagline, and CTAs.
 */
export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} ${styles.textureHex}`}>
      <div className={`${styles.content}`}>
        <Logo size={200} className={styles.logoMark} aria-label="MooreDev Technologies MDT logo" />
        <h1 className={styles.title}>MooreDev Technologies LLC</h1>
        <p className={styles.tagline}>Apps built for the way your brain works.</p>
        <div className={styles.actions}>
          <a href="#apps" className={styles.btnPrimary}>
            See Our Apps
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
