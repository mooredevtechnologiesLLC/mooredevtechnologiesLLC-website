import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Apps from './components/Apps/Apps';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/**
 * Root application component.
 * Composes the single-page layout in section order.
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Apps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
