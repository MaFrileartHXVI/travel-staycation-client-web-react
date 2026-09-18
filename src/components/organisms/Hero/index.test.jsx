import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from './index';
describe('Hero Component', () => {
  const mockData = {
    travelers: 80000,
    treasures: 862,
    cities: 1492,
  };
  const mockRef = { current: { offsetTop: 100 } };
  beforeAll(() => {
    window.scrollTo = vi.fn();
  });
  it('should render the hero section with correctly formatted numbers', () => {
    render(<Hero data={mockData} refMostPicked={mockRef} />);
    expect(screen.getByText(/Forget Busy Work/i)).toBeInTheDocument();
    expect(screen.getByText('80.000')).toBeInTheDocument();
    expect(screen.getByText('862')).toBeInTheDocument();
    expect(screen.getByText('1.492')).toBeInTheDocument();
  });
  it('should call window.scrollTo when "Show Me Now" is clicked', () => {
    render(<Hero data={mockData} refMostPicked={mockRef} />);
    const button = screen.getByText(/Show Me Now/i);
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 70,
      behavior: 'smooth',
    });
  });
});