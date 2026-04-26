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
}

/** Upcoming apps to display in the section. Add entries here as apps are announced. */
const APPS: AppCard[] = [
  {
    name: 'Coming Soon',
    description:
      'Our first app is in development — a daily task companion designed specifically for people who struggle with getting started, staying on track, and wrapping up.',
    platform: 'iOS · Android',
    accent: 'amber',
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
function AppCardItem({ name, description, platform, accent }: AppCard) {
  return (
    <article className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      <div className={styles.cardBadge}>In Development</div>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <span className={styles.cardPlatform}>{platform}</span>
    </article>
  );
}
