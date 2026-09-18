import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MostPicked from './index';
describe('MostPicked Component', () => {
  const mockData = [
    {
      _id: '1',
      name: 'Jung Hook Sie',
      imageUrl: '/images/image-mostpicked-1.jpg',
      country: 'South Korea',
      city: 'Seoul Flore',
      price: '80',
      unit: 'night',
    },
    {
      _id: '2',
      title: 'The People House',
      imageId: [{ imageUrl: '/images/image-mostpicked-2.jpg' }],
      country: 'Indonesia',
      city: 'Bogor',
      price: '52',
      unit: 'night',
    },
  ];
  it('should render the most picked section', () => {
    const { container } = render(
      <MemoryRouter>
        <MostPicked data={mockData} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Most Picked/i)).toBeInTheDocument();
    expect(screen.getByText('Jung Hook Sie')).toBeInTheDocument();
    expect(screen.getByText(/Seoul Flore, South Korea/i)).toBeInTheDocument();
    expect(screen.getByText('$80')).toBeInTheDocument();
    expect(screen.getAllByText(/per night/i).length).toBe(2);
    expect(screen.getByText('The People House')).toBeInTheDocument();
    expect(screen.getByText(/Bogor, Indonesia/i)).toBeInTheDocument();
    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0]).toHaveClass('row-2');
    expect(items[1]).toHaveClass('row-1');
  });
  it('should return null if data is empty', () => {
    const { container } = render(<MostPicked data={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});