import styles from './styles/Logo.module.scss';

/** Props for the Logo component. */
interface LogoProps {
  /** Width and height of the logo in pixels. */
  size?: number;
  /** Accessible label for the image. Defaults to 'MooreDev Technologies LLC logo'. */
  alt?: string;
  /** Additional class name to apply to the image element. */
  className?: string;
}

/**
 * Renders the MooreDev Technologies LLC logo mark from the public SVG asset.
 * Accepts a `size` prop to control width/height uniformly.
 */
export default function Logo({ size = 32, alt = 'MooreDev Technologies LLC logo', className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt={alt}
      width={size}
      height={size}
      className={`${styles.logo}${className ? ` ${className}` : ''}`}
    />
  );
}
