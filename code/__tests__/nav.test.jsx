import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../app/componentes/nav';

describe('Nav theme toggle', () => {
  beforeAll(() => {
    // jsdom may not implement matchMedia; provide a basic mock
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query) => ({
        matches: false,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        onchange: null,
        dispatchEvent: jest.fn(),
      }),
    });
  });

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('toggles dark class on documentElement and persists setting', () => {
    render(<Nav />);

    const buttons = screen.getAllByLabelText(/Cambiar a tema/);
    expect(buttons.length).toBeGreaterThan(0);

    // Click first toggle -> enable dark
    fireEvent.click(buttons[0]);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Click again -> disable dark
    fireEvent.click(buttons[0]);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
