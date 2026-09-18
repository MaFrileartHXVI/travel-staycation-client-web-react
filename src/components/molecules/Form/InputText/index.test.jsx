import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputText from './index';
describe('InputText Component', () => {
  it('should render correctly and handle input changes', () => {
    const handleChange = vi.fn();
    render(
      <InputText
        name="firstName"
        value=""
        onChange={handleChange}
        placeholder="First Name"
      />
    );
    const input = screen.getByPlaceholderText('First Name');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Angga' } });
    expect(handleChange).toHaveBeenCalled();
    const callArgs = handleChange.mock.calls[0][0];
    expect(callArgs.target.name).toBe('firstName');
    expect(callArgs.target.value).toBe('Angga');
  });
  it('should validate email pattern', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <InputText
        type="email"
        name="email"
        value=""
        onChange={handleChange}
        errorResponse="Invalid email format"
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(screen.queryByText('Invalid email format')).not.toBeInTheDocument();
  });
});