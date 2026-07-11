import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Apps from '../../components/Apps/Apps';
import Contact from '../../components/Contact/Contact';
import { handleHashOnLoad } from '../../utils/scrollToHash';

/**
 * Home page component containing the main landing page sections.
 * Handles hash navigation to scroll to specific sections.
 */
export default function Home() {
  const location = useLocation();

  // Handle scrolling to hash on initial load or when hash changes
  useEffect(() => {
    handleHashOnLoad();
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Apps />
      <Contact />
    </>
  );
}
