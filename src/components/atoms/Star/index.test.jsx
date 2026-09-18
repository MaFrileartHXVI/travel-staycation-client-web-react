import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Star from './index';
describe('Star Component', () => {
  it('should have props [value, height, width, spacing]', () => {
    const height = 40;
    const width = 40;
    const spacing = 4;
    const { container } = render(
      <Star width={width} height={height} spacing={spacing} value={3.6} />
    );
    const starContainer = container.querySelector('.stars');
    expect(starContainer).toBeInTheDocument();
    expect(starContainer).toHaveStyle(`height: ${height}px`);
    const placeholderNodes = container.querySelectorAll('.star.placeholder');
    expect(placeholderNodes.length).toBe(5);
    const actualStars = container.querySelectorAll('.star:not(.placeholder)');
    expect(actualStars.length).toBe(4);
  });
});