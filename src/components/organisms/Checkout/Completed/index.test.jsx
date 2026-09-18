import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Completed from './index';
describe('Completed Component', () => {
  it('should render correctly', () => {
    render(<Completed />);
    expect(
      screen.getByAltText('completed checkout apartment')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We will inform you via email later once the transaction has been accepted/i
      )
    ).toBeInTheDocument();
  });
});