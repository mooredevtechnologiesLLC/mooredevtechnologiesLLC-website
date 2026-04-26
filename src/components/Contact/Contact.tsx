import styles from './styles/Contact.module.scss';

/** Placeholder email until a domain email is set up. */
const CONTACT_EMAIL = 'hello@mooredevtechnologies.com';

/** GitHub organization URL. */
const GITHUB_URL = 'https://github.com/MooreDevTechnologiesLLC';

/**
 * Contact section with email and GitHub links.
 * Email is a placeholder until the domain mailbox is created.
 */
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Have a question, idea, or want to collaborate? We'd love to hear from you.
        </p>
        <div className={styles.links}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles.linkCard}
            aria-label={`Email us at ${CONTACT_EMAIL}`}
          >
            <span className={styles.linkIcon} aria-hidden="true">✉</span>
            <span className={styles.linkLabel}>Email</span>
            <span className={styles.linkValue}>{CONTACT_EMAIL}</span>
          </a>
          <a
            href={GITHUB_URL}
            className={styles.linkCard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MooreDev Technologies on GitHub (opens in new tab)"
          >
            <span className={styles.linkIcon} aria-hidden="true">
              {/* GitHub mark — inline SVG to avoid an icon library dependency */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
            <span className={styles.linkLabel}>GitHub</span>
            <span className={styles.linkValue}>MooreDevTechnologiesLLC</span>
          </a>
        </div>
      </div>
    </section>
  );
}
