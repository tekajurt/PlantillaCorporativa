import React from 'react';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Nav focus behavior', () => {
  it('moves focus to first link when opening and returns focus on Escape', async () => {
    render(<Nav />);

    const toggle = screen.getByRole('button', { name: /abrir menú|cerrar menú/i });
    // open menu
    fireEvent.click(toggle);

    // first link inside the mobile menu should receive focus
    const menu = screen.getByRole('dialog', { name: /mobile navigation|mobile navigation/i });
    const firstLink = within(menu).getByRole('link', { name: /inicio/i });
    expect(document.activeElement).toBe(firstLink);

    // press Escape to close
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    // toggle should regain focus (wait for the microtask that returns focus)
    await waitFor(() => expect(document.activeElement).toBe(toggle));
  });
});
