import { useEffect } from 'react';
import styles from './styles/Support.module.scss';

/** Support email address for MooreDev Technologies. */
const SUPPORT_EMAIL = 'support@mooredevtechnologies.com';

/**
 * Support page for MooreDev Technologies apps.
 * Provides contact information and frequently asked questions.
 */
export default function Support() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.subtitle}>
          Need help with one of our apps? We're here for you.
        </p>

        <section className={styles.section}>
          <h2>Contact us</h2>
          <p>
            For questions, bug reports, or feature requests, email us at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.link}>
              {SUPPORT_EMAIL}
            </a>
            . We aim to respond within 1–2 business days.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faq}>
            <h3>How do I report a bug?</h3>
            <p>
              Email us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.link}>
                {SUPPORT_EMAIL}
              </a>{' '}
              with your device model, iOS version, and a description of what
              happened. Screenshots help a lot.
            </p>
          </div>

          <div className={styles.faq}>
            <h3>How do I request a feature?</h3>
            <p>
              We love hearing ideas from users. Send us a note at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.link}>
                {SUPPORT_EMAIL}
              </a>{' '}
              and let us know what you'd like to see.
            </p>
          </div>

          <div className={styles.faq}>
            <h3>I'm having trouble with an in-app purchase.</h3>
            <p>
              If a purchase isn't showing up, try "Restore Purchases" in the
              app's settings first — this re-syncs your purchases from your
              Apple ID. If that doesn't resolve it, email us and we'll help
              troubleshoot. For refunds or billing issues, those are handled
              directly by Apple at{' '}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </div>

          <div className={styles.faq}>
            <h3>Is my data backed up or synced anywhere?</h3>
            <p>
              All app data is stored locally on your device. For apps with
              iCloud sync enabled, your data syncs through your personal iCloud
              account — we don't have access to it or store it on our own
              servers.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our apps</h2>
          <p>
            This support page covers all MooreDev Technologies apps, including:
          </p>
          <ul>
            <li>Submarine: Reef Pilot</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
