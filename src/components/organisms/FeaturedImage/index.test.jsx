import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturedImage from './index';
describe('FeaturedImage Component', () => {
  const data = [
    {
      _id: 'img-1',
      url: '/images/img-1.jpg',
    },
    {
      _id: 'img-2',
      url: '/images/img-2.jpg',
    },
    {
      _id: 'img-3',
      url: '/images/img-3.jpg',
    },
  ];
  it('should render images with correct layout classes', () => {
    const { container } = render(<FeaturedImage data={data} />);
    const items = container.querySelectorAll('.item');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveClass('column-7');
    expect(items[0]).toHaveClass('row-2');
    expect(items[1]).toHaveClass('column-5');
    expect(items[1]).toHaveClass('row-1');
    expect(items[2]).toHaveClass('column-5');
    expect(items[2]).toHaveClass('row-1');
  });
  it('should render images properly', () => {
    render(<FeaturedImage data={data} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('src', '/images/img-1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'img-1');
  });
});