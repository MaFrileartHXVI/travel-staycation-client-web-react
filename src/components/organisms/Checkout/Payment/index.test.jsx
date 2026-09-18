import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Payment from './index';
describe('Payment Component', () => {
  const ItemDetails = {
    _id: 'item-1',
    price: 50,
  };
  const checkout = {
    duration: 3,
  };
  const data = {
    proofPayment: '',
    bankName: '',
    bankHolder: '',
  };
  const onChange = vi.fn();
  it('should render calculations correctly', () => {
    render(
      <Payment
        ItemDetails={ItemDetails}
        checkout={checkout}
        data={data}
        onChange={onChange}
      />
    );
    expect(screen.getByText('Sub total: $150 USD')).toBeInTheDocument();
    expect(screen.getByText('Total: $165 USD')).toBeInTheDocument();
  });
});