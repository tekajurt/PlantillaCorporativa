import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '../app/componentes/section';

describe('Section component', () => {
  it('renders children and id', () => {
    render(
      <Section id="test-section">
        <div>Contenido</div>
      </Section>
    );

    const el = screen.getByText('Contenido');
    expect(el).toBeInTheDocument();
    expect(el.closest('#test-section')).toBeTruthy();
  });
});
