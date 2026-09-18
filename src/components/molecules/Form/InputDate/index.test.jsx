import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputDate from './index';
describe('InputDate Component', () => {
  it('should render correctly and display formatted date', () => {
    const handleChange = vi.fn();
    const value = {
      startDate: new Date('2020-09-09'),
      endDate: new Date('2020-09-12'),
      key: 'selection',
    };
    render(
      <InputDate name="dateRange" value={value} onChange={handleChange} />
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('09 Sep - 12 Sep');
  });
  it('should toggle DateRange picker when input is clicked', () => {
    const handleChange = vi.fn();
    const value = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    };
    const { container } = render(
      <InputDate name="dateRange" value={value} onChange={handleChange} />
    );
    const input = screen.getByRole('textbox');
    expect(
      container.querySelector('.date-range-wrapper')
    ).not.toBeInTheDocument();
    fireEvent.click(input);
    expect(container.querySelector('.date-range-wrapper')).toBeInTheDocument();
  });
});