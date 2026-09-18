import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageDetailDescription from './index';
describe('PageDetailDescription Component', () => {
  const data = {
    description: '<p>This is a <strong>beautiful</strong> place.</p>',
    features: [
      {
        imageUrl: '/images/icon-bedroom.svg',
        name: 'bedroom',
        qty: 3,
      },
      {
        imageUrl: '/images/icon-livingroom.svg',
        name: 'living room',
        qty: 1,
      },
    ],
  };
  it('should render HTML description correctly', () => {
    render(<PageDetailDescription data={data} />);
    expect(
      screen.getByText(
        (content, element) =>
          content.startsWith('This is a') &&
          element.tagName.toLowerCase() === 'p'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('beautiful')).toBeInTheDocument();
    expect(screen.getByText('beautiful').tagName).toBe('STRONG');
  });
  it('should render features correctly', () => {
    render(<PageDetailDescription data={data} />);
    expect(screen.getByText('bedroom')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('living room')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/images/icon-bedroom.svg');
    expect(images[1]).toHaveAttribute('src', '/images/icon-livingroom.svg');
  });
  it('should render empty state when no features', () => {
    const emptyData = { ...data, features: [] };
    render(<PageDetailDescription data={emptyData} />);
    expect(screen.getByText('Tidak Ada Feature')).toBeInTheDocument();
  });
});