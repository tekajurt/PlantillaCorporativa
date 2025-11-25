import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactSection from '../app/sections/contacto';

describe('Contact form (UI)', () => {
  it('renders form fields and shows alert on submit', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<ContactSection />);

    const name = screen.getByLabelText(/Nombre/i);
    const email = screen.getByLabelText(/Correo electrónico/i);
    const message = screen.getByLabelText(/Mensaje/i);
    const submit = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.change(name, { target: { value: 'Test User' } });
    fireEvent.change(email, { target: { value: 'test@example.com' } });
    fireEvent.change(message, { target: { value: 'Hello there' } });

    fireEvent.click(submit);
    expect(alertSpy).toHaveBeenCalled();

    alertSpy.mockRestore();
  });
});
