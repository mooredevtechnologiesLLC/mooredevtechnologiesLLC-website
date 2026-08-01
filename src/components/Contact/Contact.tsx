import { HiMail } from 'react-icons/hi';
import { SiAppstore, SiGithub } from 'react-icons/si';
import styles from './styles/Contact.module.scss';
import { CONTACT_EMAIL, MDT_APP_STORE_LINK, GITHUB_URL } from '../../constants';

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
            <span className={styles.linkIcon} aria-hidden="true">
              <HiMail />
            </span>
            <span className={styles.linkLabel}>Email</span>
            <span className={styles.linkValue}>{CONTACT_EMAIL}</span>
          </a>
          <a
            href={MDT_APP_STORE_LINK}
            className={styles.linkCard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MooreDev Technologies on the App Store (opens in new tab)"
          >
            <span className={styles.linkIcon} aria-hidden="true">
              <SiAppstore />
            </span>
            <span className={styles.linkLabel}>App Store</span>
            <span className={styles.linkValue}>View Our Apps</span>
          </a>
          <a
            href={GITHUB_URL}
            className={styles.linkCard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MooreDev Technologies on GitHub (opens in new tab)"
          >
            <span className={styles.linkIcon} aria-hidden="true">
              <SiGithub />
            </span>
            <span className={styles.linkLabel}>GitHub</span>
            <span className={styles.linkValue}>MooreDevTechnologiesLLC</span>
          </a>
          {/* Add more social links here - uncomment and update as needed: */}
          {/* <a
            href={TWITTER_URL}
            className={styles.linkCard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X (opens in new tab)"
          >
            <span className={styles.linkIcon} aria-hidden="true">
              <SiX />
            </span>
            <span className={styles.linkLabel}>X (Twitter)</span>
            <span className={styles.linkValue}>@yourhandle</span>
          </a> */}
          {/* <a
            href={LINKEDIN_URL}
            className={styles.linkCard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn (opens in new tab)"
          >
            <span className={styles.linkIcon} aria-hidden="true">
              <FaLinkedin />
            </span>
            <span className={styles.linkLabel}>LinkedIn</span>
            <span className={styles.linkValue}>Company Page</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
