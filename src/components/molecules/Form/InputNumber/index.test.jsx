import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputNumber from './index';
describe('InputNumber Component', () => {
  it('should render correctly and display value with prefix/suffix', () => {
    const handleChange = vi.fn();
    render(
      <InputNumber
        name="duration"
        value={3}
        onChange={handleChange}
        prefix="Rp "
        suffix=" night"
        isSuffixPlural
        max={10}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('Rp 3 nights');
  });
  it('should call onChange with decremented value when minus is clicked', () => {
    const handleChange = vi.fn();
    render(
      <InputNumber
        name="duration"
        value={3}
        onChange={handleChange}
        min={1}
        max={10}
      />
    );
    const minusBtn = screen.getByText('-');
    fireEvent.click(minusBtn);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe(2);
  });
  it('should call onChange with incremented value when plus is clicked', () => {
    const handleChange = vi.fn();
    render(
      <InputNumber
        name="duration"
        value={3}
        onChange={handleChange}
        min={1}
        max={10}
      />
    );
    const plusBtn = screen.getByText('+');
    fireEvent.click(plusBtn);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe(4);
  });
});