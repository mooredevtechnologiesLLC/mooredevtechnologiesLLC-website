import styles from './styles/Apps.module.scss';

/** Metadata for a single app card entry. */
interface AppCard {
  /** App display name. */
  name: string;
  /** Short description of the app's purpose. */
  description: string;
  /** Platform label (e.g., "iOS · Android"). */
  platform: string;
  /** Accent color key — maps to a CSS custom property modifier class. */
  accent: 'amber' | 'lavender' | 'sage';
  /** Badge text displayed in the top-left chip. */
  badge: string;
  /** Badge color variant. */
  badgeVariant: 'amber' | 'sage' | 'lavender';
  /** Optional URL — renders a "Play Now →" / "Visit →" CTA link. */
  href?: string;
}

/** Upcoming apps to display in the section. Add entries here as apps are announced. */
const APPS: AppCard[] = [
  {
    name: 'Coming Soon',
    description:
      'Our first app is in development — a daily task companion designed specifically for people who struggle with getting started, staying on track, and wrapping up.',
    platform: 'iOS · Android',
    accent: 'amber',
    badge: 'In Development',
    badgeVariant: 'amber',
  },
  {
    name: 'Games',
    description:
      'A growing collection app games — quick to pick up, fun to play. No subscriptions, no accounts required.',
    platform: 'Browser',
    accent: 'lavender',
    badge: 'In Development',
    badgeVariant: 'amber',
    href: 'https://games.mooredevtechnologies.com',
  },
];

/**
 * Apps section showcasing upcoming and released MooreDev applications.
 * Currently displays Coming Soon cards while apps are in development.
 */
export default function Apps() {
  return (
    <section id="apps" className={styles.apps}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Apps</h2>
        <p className={styles.subtitle}>
          Tools designed to make every day a little easier.
        </p>
        <div className={styles.grid}>
          {APPS.map((app) => (
            <AppCardItem key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Single app card rendered in the apps grid.
 *
 * @param props - AppCard metadata
 */
function AppCardItem({ name, description, platform, accent, badge, badgeVariant, href }: AppCard) {
  return (
    <article className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      <div className={`${styles.cardBadge} ${styles[`cardBadge--${badgeVariant}`]}`}>
        {badge}
      </div>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardPlatform}>{platform}</span>
      {href && (
        <a
          href={href}
          className={styles.cardLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Now →
        </a>
      )}
    </article>
  );
}
