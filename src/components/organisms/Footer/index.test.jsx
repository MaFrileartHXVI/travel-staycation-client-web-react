import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';
describe('Footer Component', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/We snug your beauty holiday/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/For Beginners/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright 2019/i)).toBeInTheDocument();
  });
});