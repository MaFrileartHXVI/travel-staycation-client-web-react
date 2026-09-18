import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';

describe('Button Component', () => {
  it('should not allow click if isDisabled is present', () => {
    const { container } = render(<Button isDisabled />);
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
  });

  it('should render loading spinner', () => {
    const { container } = render(<Button isLoading />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should render <a> tag when type is link and isExternal', () => {
    const { container } = render(<Button type="link" isExternal href="https://example.com" />);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('should render <Link> component when type is link', () => {
    const { container } = render(
      <Router>
        <Button type="link" href="/home" />
      </Router>
    );
    expect(container.querySelector('a')).toBeInTheDocument();
  });
});
