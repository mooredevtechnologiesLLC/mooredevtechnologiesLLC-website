import styles from './styles/About.module.scss';

/**
 * About section — company mission and values.
 * Communicates who MooreDev Technologies LLC is and why it exists.
 */
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>About Us</h2>
        <div className={styles.body}>
          <p className={styles.lead}>
            MooreDev Technologies LLC is an independent software company dedicated to building
            tools that help people with executive function challenges navigate daily life with
            greater ease and confidence.
          </p>
          <p>
            Executive function — the set of mental skills that help us plan, focus, follow
            instructions, and manage multiple tasks — affects millions of people living with
            ADHD, autism, TBI, anxiety, and many other conditions. Off-the-shelf productivity
            apps are rarely designed with these users in mind.
          </p>
          <p>
            We build differently. Every app we ship starts with empathy: understanding the
            real friction points that make daily tasks hard, and designing gentle, intuitive
            solutions that meet people where they are.
          </p>
        </div>
        <div className={styles.values}>
          {VALUES.map(({ icon, title, description }) => (
            <div key={title} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">
                {icon}
              </span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Value proposition cards displayed in the about section. */
interface Value {
  /** Unicode emoji used as a decorative icon. */
  icon: string;
  /** Short value title. */
  title: string;
  /** One-sentence description. */
  description: string;
}

/** Core values surfaced in the about section. */
const VALUES: Value[] = [
  {
    icon: '🧠',
    title: 'Brain-First Design',
    description: 'Every decision is grounded in how executive function actually works — not how we wish it did.',
  },
  {
    icon: '✦',
    title: 'Low Friction',
    description: 'We remove every unnecessary step between intention and action.',
  },
  {
    icon: '🌱',
    title: 'Built to Grow',
    description: 'Our apps start simple and expand as users build confidence in their routines.',
  },
];
