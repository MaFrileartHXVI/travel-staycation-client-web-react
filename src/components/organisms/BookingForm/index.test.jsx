import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './index';
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
describe('BookingForm Component', () => {
  const itemDetails = {
    _id: 'item-1',
    price: 50,
    unit: 'night',
  };
  const startBooking = vi.fn();
  it('should render correct initial state', () => {
    render(
      <BrowserRouter>
        <BookingForm itemDetails={itemDetails} startBooking={startBooking} />
      </BrowserRouter>
    );
    expect(screen.getByText('Start Booking')).toBeInTheDocument();
    expect(screen.getByText('$50')).toBeInTheDocument();
    expect(screen.getByText('$50 USD')).toBeInTheDocument();
  });
  it('should call startBooking and navigate on submit', () => {
    render(
      <BrowserRouter>
        <BookingForm itemDetails={itemDetails} startBooking={startBooking} />
      </BrowserRouter>
    );
    const button = screen.getByText('Continue to Book');
    fireEvent.click(button);
    expect(startBooking).toHaveBeenCalledTimes(1);
    expect(startBooking).toHaveBeenCalledWith(
      expect.objectContaining({
        _id: 'item-1',
        duration: 1,
      })
    );
    expect(mockNavigate).toHaveBeenCalledWith('/checkout');
  });
});