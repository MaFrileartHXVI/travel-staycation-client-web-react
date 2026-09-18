import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Categories from './index';
describe('Categories Component', () => {
  const mockData = [
    {
      name: 'House with beauty backyard',
      itemId: [
        {
          _id: '1',
          name: 'Tabby Town',
          isPopular: true,
          imageUrl: '/images/image-category-1.jpg',
          country: 'Indonesia',
          city: 'Gunung Batu',
        },
        {
          _id: '2',
          title: 'Anggana',
          isPopular: false,
          imageId: [{ imageUrl: '/images/image-category-2.jpg' }],
          country: 'Indonesia',
          city: 'Bogor',
        },
      ],
    },
    {
      name: 'Empty Category',
      itemId: [],
    },
  ];
  it('should render categories correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Categories data={mockData} />
      </MemoryRouter>
    );
    expect(screen.getByText('House with beauty backyard')).toBeInTheDocument();
    expect(screen.getByText('Tabby Town')).toBeInTheDocument();
    expect(screen.getByText(/Gunung Batu, Indonesia/i)).toBeInTheDocument();
    expect(screen.getByText('Anggana')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.queryByText('Empty Category')).not.toBeInTheDocument();
    const items = container.querySelectorAll('.item');
    expect(items.length).toBe(2);
    expect(items[0]).toHaveClass('column-3 row-1');
  });
  it('should return null if data is empty', () => {
    const { container } = render(<Categories data={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});