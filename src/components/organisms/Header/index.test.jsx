import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';
describe('Header Component', () => {
  it('should render correctly with default props', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Browse By/i)).toBeInTheDocument();
  });
  it('should render centered brand icon when isCentered is true', () => {
    const { container } = render(
      <MemoryRouter>
        <Header isCentered />
      </MemoryRouter>
    );
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
    expect(container.querySelector('.brand-text-icon')).toBeInTheDocument();
  });
  it('should have active class on current route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/browse-by']}>
        <Header />
      </MemoryRouter>
    );
    const navItems = container.querySelectorAll('.nav-item');
    expect(navItems[1]).toHaveClass('active');
  });
});