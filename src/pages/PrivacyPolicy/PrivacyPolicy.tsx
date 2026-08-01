import { useEffect } from 'react';
import styles from './styles/PrivacyPolicy.module.scss';
import { SUPPORT_EMAIL } from '../../constants';

/** Last updated date for the privacy policy. */
const LAST_UPDATED = 'August 1, 2026';

/**
 * Privacy Policy page for MooreDev Technologies apps.
 * Describes data collection practices (none).
 */
export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>

        <section className={styles.section}>
          <h2>Overview</h2>
          <p>
            MooreDev Technologies LLC ("we," "us," or "our") develops mobile
            applications to help users manage daily tasks and executive-function
            needs. This policy describes our data practices for all apps we publish.
          </p>
          <p className={styles.highlight}>
            We do not collect, store, or share any personal information from users
            of our apps.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Data We Do Not Collect</h2>
          <p>
            These apps contain no analytics SDKs, no crash-reporting services, no
            advertising networks, and no third-party tracking of any kind. Specifically,
            we do not collect:
          </p>
          <ul>
            <li>Names, email addresses, or any account information</li>
            <li>Location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Usage analytics or behavioral data</li>
            <li>Crash logs or diagnostics</li>
            <li>Health or fitness data</li>
            <li>Financial or payment information</li>
          </ul>
          <p>
            All data you enter into the app (tasks, preferences, notes) is stored
            locally on your device only and never transmitted to our servers or any
            third party.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Apple Platform Services</h2>
          <p>
            These apps run on Apple's iOS/iPadOS platforms. Apple may independently
            collect certain diagnostic and usage data as part of operating iOS and
            the App Store. This data collection is governed entirely by{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Apple's Privacy Policy
            </a>{' '}
            and is outside our control. We do not receive or have access to any of
            that data.
          </p>
          <p>
            If you use iCloud (for device backup or cross-device sync of app data
            managed by iOS), that data is stored in your personal iCloud account and
            is governed by Apple's privacy practices, not ours.
          </p>
        </section>

        <section className={styles.section}>
          <h2>In-App Purchases</h2>
          <p>
            Some of our apps may offer optional in-app purchases. All payment
            processing is handled exclusively by Apple through the App Store. We
            never see, receive, or store your payment information. Refer to Apple's
            privacy policy for details on how purchase transactions are handled.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Children's Privacy</h2>
          <p>
            Because we collect no personal information whatsoever, our apps do not
            knowingly collect data from children under 13 (or the applicable age of
            digital consent in your region). There is no data to collect, retain, or
            disclose.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to This Policy</h2>
          <p>
            If our data practices ever change, we will update this page and revise
            the "Last updated" date above. We encourage you to review this policy
            periodically. Continued use of the apps after any changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={styles.link}>
              support@mooredevtechnologies.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
