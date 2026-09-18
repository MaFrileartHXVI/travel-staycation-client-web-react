import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputFile from './index';
describe('InputFile Component', () => {
  it('should render correctly and trigger file dialog', () => {
    const handleChange = vi.fn();
    render(
      <InputFile name="avatar" accept="image/*" onChange={handleChange} />
    );
    const textInput = screen.getByPlaceholderText('Browse a file...');
    expect(textInput).toBeInTheDocument();
    fireEvent.click(textInput);
    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', 'image/*');
  });
});