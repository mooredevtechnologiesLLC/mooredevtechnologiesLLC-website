import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Amber Design System tokens — applies :root CSS custom properties
import './styles/_tokens.scss';
// Global base reset and typography
import './styles/global.scss';

// Fontsource — loaded here to keep component files font-agnostic
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/caveat/400.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
