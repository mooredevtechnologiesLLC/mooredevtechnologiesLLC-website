import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LanguageSelector from './LanguageSelector';
import type { LanguageCode } from '../../pages/PrivacyPolicy/translations';

// Mock react-router-dom hooks
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

/**
 * Helper function to render LanguageSelector with router context.
 * @param currentLanguage - The currently selected language
 */
const renderLanguageSelector = (currentLanguage: LanguageCode = 'en') => {
  return render(
    <BrowserRouter>
      <LanguageSelector currentLanguage={currentLanguage} />
    </BrowserRouter>
  );
};

describe('LanguageSelector', () => {
  const mockNavigate = vi.fn();
  const mockLocation = {
    pathname: '/privacy-policy',
    search: '',
    hash: '',
    state: null,
    key: 'default',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as ReturnType<typeof vi.fn>).mockReturnValue(mockNavigate);
    (useLocation as ReturnType<typeof vi.fn>).mockReturnValue(mockLocation);
  });

  describe('Rendering', () => {
    it('should render the language selector with label', () => {
      renderLanguageSelector();
      expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
    });

    it('should render all language options', () => {
      renderLanguageSelector();
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(5);
    });

    it('should display language options in their native names', () => {
      renderLanguageSelector();
      expect(screen.getByRole('option', { name: 'English' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Español' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Français' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: '日本語' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Deutsch' })).toBeInTheDocument();
    });

    it('should have correct value for English', () => {
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('en');
    });

    it('should have correct value for Spanish', () => {
      renderLanguageSelector('es');
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('es');
    });

    it('should have correct value for French', () => {
      renderLanguageSelector('fr');
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('fr');
    });

    it('should have correct value for Japanese', () => {
      renderLanguageSelector('ja');
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('ja');
    });

    it('should have correct value for German', () => {
      renderLanguageSelector('de');
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('de');
    });
  });

  describe('Language change navigation', () => {
    it('should navigate to Spanish version when selecting Spanish', () => {
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'es' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?lang=es');
    });

    it('should navigate to French version when selecting French', () => {
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'fr' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?lang=fr');
    });

    it('should navigate to Japanese version when selecting Japanese', () => {
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'ja' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?lang=ja');
    });

    it('should navigate to German version when selecting German', () => {
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'de' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?lang=de');
    });

    it('should remove lang parameter when switching to English', () => {
      (useLocation as ReturnType<typeof vi.fn>).mockReturnValue({
        ...mockLocation,
        search: '?lang=es',
      });
      renderLanguageSelector('es');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'en' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy');
    });

    it('should preserve pathname when changing language', () => {
      (useLocation as ReturnType<typeof vi.fn>).mockReturnValue({
        ...mockLocation,
        pathname: '/some/other/path',
      });
      renderLanguageSelector('en');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'es' } });
      expect(mockNavigate).toHaveBeenCalledWith('/some/other/path?lang=es');
    });

    it('should update lang parameter when switching between non-English languages', () => {
      (useLocation as ReturnType<typeof vi.fn>).mockReturnValue({
        ...mockLocation,
        search: '?lang=es',
      });
      renderLanguageSelector('es');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'fr' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?lang=fr');
    });

    it('should preserve other query parameters when changing language', () => {
      (useLocation as ReturnType<typeof vi.fn>).mockReturnValue({
        ...mockLocation,
        search: '?foo=bar&lang=es',
      });
      renderLanguageSelector('es');
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'fr' } });
      expect(mockNavigate).toHaveBeenCalledWith('/privacy-policy?foo=bar&lang=fr');
    });
  });

  describe('Accessibility', () => {
    it('should have accessible label for select element', () => {
      renderLanguageSelector();
      const select = screen.getByRole('combobox');
      expect(select).toHaveAccessibleName(/language/i);
    });

    it('should have id matching label htmlFor', () => {
      renderLanguageSelector();
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('id', 'language-selector');
    });

    it('should have proper option values', () => {
      renderLanguageSelector();
      const englishOption = screen.getByRole('option', { name: 'English' }) as HTMLOptionElement;
      const spanishOption = screen.getByRole('option', { name: 'Español' }) as HTMLOptionElement;
      const frenchOption = screen.getByRole('option', { name: 'Français' }) as HTMLOptionElement;
      const japaneseOption = screen.getByRole('option', { name: '日本語' }) as HTMLOptionElement;
      const germanOption = screen.getByRole('option', { name: 'Deutsch' }) as HTMLOptionElement;

      expect(englishOption.value).toBe('en');
      expect(spanishOption.value).toBe('es');
      expect(frenchOption.value).toBe('fr');
      expect(japaneseOption.value).toBe('ja');
      expect(germanOption.value).toBe('de');
    });
  });
});
