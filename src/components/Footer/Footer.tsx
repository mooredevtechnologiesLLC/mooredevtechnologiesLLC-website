import { Link, useLocation } from 'react-router-dom';
import { SiAppstore } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import styles from './styles/Footer.module.scss';
import { GAME_SITE_URL, GITHUB_URL, MDT_APP_STORE_LINK } from '../../constants';

/** Current year, computed once at module load time. */
const CURRENT_YEAR = new Date().getFullYear();

/** Social media and external links configuration */
const SOCIAL_LINKS = [
  {
    name: 'App Store',
    url: MDT_APP_STORE_LINK,
    icon: <SiAppstore />,
  },
  // Add your social media links here - uncomment and update URLs as needed:
  // {
  //   name: 'X (Twitter)',
  //   url: 'https://twitter.com/yourhandle',
  //   icon: <SiX />,
  // },
  // {
  //   name: 'LinkedIn',
  //   url: 'https://linkedin.com/company/yourcompany',
  //   icon: <FaLinkedin />,
  // },
  {
    name: 'GitHub',
    url: GITHUB_URL,
    icon: <SiGithub />,
  },
];

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
        <div className={styles.leftSection}>
          <span className={styles.copy}>
            &copy; {CURRENT_YEAR} MooreDev Technologies LLC. All rights reserved.
          </span>
          <div className={styles.socialLinks} aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <nav className={styles.nav} aria-label="Footer navigation">
          {renderLink('About', '#about')}
          {renderLink('Apps', '#apps')}
          <a
            href={GAME_SITE_URL}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Games
          </a>
          {renderLink('Contact', '#contact')}
          {renderLink('Privacy Policy', '/privacy-policy')}
          {renderLink('Support', '/support')}
        </nav>
      </div>
    </footer>
  );
}
