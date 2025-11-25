import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../components/Header';
import Card from '../components/Card';
import ContactForm from '../components/ui/Input';

expect.extend(toHaveNoViolations);

describe('a11y: basic components', () => {
  test('Header has no axe violations', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }, 10000);

  test('Card has no axe violations', async () => {
    const { container } = render(<Card title="Prueba" description="Prueba" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Contact input (UI) has no axe violations', async () => {
    // Input expects a label prop for accessibility; provide it in the test
    const { container } = render(<ContactForm id="test-input" label="Nombre" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
