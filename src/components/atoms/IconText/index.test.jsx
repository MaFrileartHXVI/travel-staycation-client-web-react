import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import IconText from './index';
describe('IconText Component', () => {
  it('should render the brand text correctly', () => {
    const { container } = render(
      <Router>
        <IconText />
      </Router>
    );
    expect(screen.getByText(/Stay/i)).toBeInTheDocument();
    expect(screen.getByText(/cation./i)).toBeInTheDocument();
    expect(container.querySelector('.brand-text-icon')).toBeInTheDocument();
  });
});