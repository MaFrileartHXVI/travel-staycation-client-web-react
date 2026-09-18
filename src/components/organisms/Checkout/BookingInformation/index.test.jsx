import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingInformation from './index';
describe('BookingInformation Component', () => {
  const ItemDetails = {
    _id: 'item-1',
    name: 'Beautiful House',
    city: 'Bogor',
    country: 'Indonesia',
    price: 50,
    unit: 'night',
    imageUrls: [{ _id: 'img-1', url: '/images/img-1.jpg' }],
  };
  const checkout = {
    duration: 3,
  };
  const data = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  const onChange = vi.fn();
  it('should render item details correctly', () => {
    render(
      <BookingInformation
        ItemDetails={ItemDetails}
        checkout={checkout}
        data={data}
        onChange={onChange}
      />
    );
    expect(screen.getByText('Beautiful House')).toBeInTheDocument();
    expect(screen.getByText('Bogor, Indonesia')).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('$150 USD'))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('3 night'))
    ).toBeInTheDocument();
  });
  it('should call onChange when input is changed', () => {
    render(
      <BookingInformation
        ItemDetails={ItemDetails}
        checkout={checkout}
        data={data}
        onChange={onChange}
      />
    );
    const firstNameInput = screen.getAllByRole('textbox')[0];
    fireEvent.change(firstNameInput, {
      target: { value: 'Angga', name: 'firstName' },
    });
    expect(onChange).toHaveBeenCalled();
  });
});