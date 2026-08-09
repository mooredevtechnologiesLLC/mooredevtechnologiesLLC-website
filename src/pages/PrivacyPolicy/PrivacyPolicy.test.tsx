import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import PrivacyPolicy from './PrivacyPolicy';

/**
 * Helper function to render PrivacyPolicy with router context.
 * @param initialUrl - The initial URL to render (default: '/privacy-policy')
 */
const renderPrivacyPolicy = (initialUrl = '/privacy-policy') => {
  window.history.pushState({}, '', initialUrl);
  return render(
    <BrowserRouter>
      <PrivacyPolicy />
    </BrowserRouter>
  );
};

describe('PrivacyPolicy', () => {
  describe('English (default)', () => {
    it('should render privacy policy in English by default', () => {
      renderPrivacyPolicy();
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
      expect(screen.getByText(/Last updated/i)).toBeInTheDocument();
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });

    it('should render all main sections in English', () => {
      renderPrivacyPolicy();
      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByText('Data We Do Not Collect')).toBeInTheDocument();
      expect(screen.getByText('Apple Platform Services')).toBeInTheDocument();
      expect(screen.getByText('In-App Purchases')).toBeInTheDocument();
      expect(screen.getByText("Children's Privacy")).toBeInTheDocument();
      expect(screen.getByText('Changes to This Policy')).toBeInTheDocument();
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('should render the highlight statement', () => {
      renderPrivacyPolicy();
      expect(
        screen.getByText(
          /We do not collect, store, or share any personal information/i
        )
      ).toBeInTheDocument();
    });

    it('should render Apple Privacy Policy link', () => {
      renderPrivacyPolicy();
      const appleLink = screen.getByRole('link', { name: /Apple's Privacy Policy/i });
      expect(appleLink).toHaveAttribute('href', 'https://www.apple.com/legal/privacy/');
      expect(appleLink).toHaveAttribute('target', '_blank');
    });

    it('should render support email link', () => {
      renderPrivacyPolicy();
      const emailLink = screen.getByRole('link', { name: /support@mooredevtechnologies.com/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:support@mooredevtechnologies.com');
    });
  });

  describe('Spanish', () => {
    it('should render privacy policy in Spanish when lang=es', () => {
      renderPrivacyPolicy('/privacy-policy?lang=es');
      expect(screen.getByText('Política de Privacidad')).toBeInTheDocument();
      expect(screen.getByText(/Última actualización/i)).toBeInTheDocument();
      expect(screen.getByText('Resumen')).toBeInTheDocument();
    });

    it('should render all main sections in Spanish', () => {
      renderPrivacyPolicy('/privacy-policy?lang=es');
      expect(screen.getByText('Resumen')).toBeInTheDocument();
      expect(screen.getByText('Datos que NO Recopilamos')).toBeInTheDocument();
      expect(screen.getByText('Servicios de la Plataforma Apple')).toBeInTheDocument();
      expect(screen.getByText('Compras Dentro de la Aplicación')).toBeInTheDocument();
      expect(screen.getByText('Privacidad de los Niños')).toBeInTheDocument();
      expect(screen.getByText('Cambios a Esta Política')).toBeInTheDocument();
      expect(screen.getByText('Contáctanos')).toBeInTheDocument();
    });
  });

  describe('French', () => {
    it('should render privacy policy in French when lang=fr', () => {
      renderPrivacyPolicy('/privacy-policy?lang=fr');
      expect(screen.getByText('Politique de Confidentialité')).toBeInTheDocument();
      expect(screen.getByText(/Dernière mise à jour/i)).toBeInTheDocument();
      expect(screen.getByText('Aperçu')).toBeInTheDocument();
    });

    it('should render all main sections in French', () => {
      renderPrivacyPolicy('/privacy-policy?lang=fr');
      expect(screen.getByText('Aperçu')).toBeInTheDocument();
      expect(screen.getByText('Données que Nous NE Collectons PAS')).toBeInTheDocument();
      expect(screen.getByText("Services de la Plateforme Apple")).toBeInTheDocument();
      expect(screen.getByText('Achats Intégrés')).toBeInTheDocument();
      expect(screen.getByText('Confidentialité des Enfants')).toBeInTheDocument();
      expect(screen.getByText('Modifications de Cette Politique')).toBeInTheDocument();
      expect(screen.getByText('Nous Contacter')).toBeInTheDocument();
    });
  });

  describe('Japanese', () => {
    it('should render privacy policy in Japanese when lang=ja', () => {
      renderPrivacyPolicy('/privacy-policy?lang=ja');
      expect(screen.getByText('プライバシーポリシー')).toBeInTheDocument();
      expect(screen.getByText(/最終更新日/i)).toBeInTheDocument();
      expect(screen.getByText('概要')).toBeInTheDocument();
    });

    it('should render all main sections in Japanese', () => {
      renderPrivacyPolicy('/privacy-policy?lang=ja');
      expect(screen.getByText('概要')).toBeInTheDocument();
      expect(screen.getByText('収集しないデータ')).toBeInTheDocument();
      expect(screen.getByText('AppleプラットフォームサービS')).toBeInTheDocument();
      expect(screen.getByText('アプリ内購入')).toBeInTheDocument();
      expect(screen.getByText('児童のプライバシー')).toBeInTheDocument();
      expect(screen.getByText('このポリシーの変更')).toBeInTheDocument();
      expect(screen.getByText('お問い合わせ')).toBeInTheDocument();
    });
  });

  describe('German', () => {
    it('should render privacy policy in German when lang=de', () => {
      renderPrivacyPolicy('/privacy-policy?lang=de');
      expect(screen.getByText('Datenschutzerklärung')).toBeInTheDocument();
      expect(screen.getByText(/Zuletzt aktualisiert/i)).toBeInTheDocument();
      expect(screen.getByText('Überblick')).toBeInTheDocument();
    });

    it('should render all main sections in German', () => {
      renderPrivacyPolicy('/privacy-policy?lang=de');
      expect(screen.getByText('Überblick')).toBeInTheDocument();
      expect(screen.getByText('Daten, die Wir NICHT Sammeln')).toBeInTheDocument();
      expect(screen.getByText('Apple-Plattformdienste')).toBeInTheDocument();
      expect(screen.getByText('In-App-Käufe')).toBeInTheDocument();
      expect(screen.getByText('Datenschutz für Kinder')).toBeInTheDocument();
      expect(screen.getByText('Änderungen an Dieser Richtlinie')).toBeInTheDocument();
      expect(screen.getByText('Kontaktieren Sie Uns')).toBeInTheDocument();
    });
  });

  describe('Language selector', () => {
    it('should render language selector', () => {
      renderPrivacyPolicy();
      expect(screen.getByRole('combobox', { name: /language/i })).toBeInTheDocument();
    });

    it('should have English selected by default', () => {
      renderPrivacyPolicy();
      const selector = screen.getByRole('combobox', { name: /language/i }) as HTMLSelectElement;
      expect(selector.value).toBe('en');
    });

    it('should have Spanish selected when lang=es', () => {
      renderPrivacyPolicy('/privacy-policy?lang=es');
      const selector = screen.getByRole('combobox', { name: /language/i }) as HTMLSelectElement;
      expect(selector.value).toBe('es');
    });

    it('should include all language options', () => {
      renderPrivacyPolicy();
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(5);
      expect(screen.getByRole('option', { name: 'English' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Español' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Français' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: '日本語' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Deutsch' })).toBeInTheDocument();
    });
  });

  describe('Invalid language codes', () => {
    it('should default to English for invalid language code', () => {
      renderPrivacyPolicy('/privacy-policy?lang=invalid');
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });

    it('should default to English for empty language parameter', () => {
      renderPrivacyPolicy('/privacy-policy?lang=');
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });
  });

  describe('Scroll behavior', () => {
    it('should scroll to top on mount', () => {
      const scrollToSpy = vi.spyOn(window, 'scrollTo');
      renderPrivacyPolicy();
      expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
      scrollToSpy.mockRestore();
    });
  });
});
