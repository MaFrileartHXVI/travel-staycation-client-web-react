import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Testimony from './index';
describe('Testimony Component', () => {
  const mockData = {
    _id: '1',
    name: 'Happy Family',
    imageUrl: '/images/testimonial-landingpages.jpg',
    rate: 4.55,
    content:
      'What a great trip with my family and I should try again next time soon...',
    familyName: 'Angga',
    familyOccupation: 'Product Designer',
  };
  it('should render testimony correctly', () => {
    render(
      <MemoryRouter>
        <Testimony data={mockData} />
      </MemoryRouter>
    );
    expect(screen.getByText('Happy Family')).toBeInTheDocument();
    expect(
      screen.getByText(/What a great trip with my family/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Angga, Product Designer')).toBeInTheDocument();
    expect(screen.getByText('Read Their Story')).toBeInTheDocument();
  });
  it('should return null if data is missing', () => {
    const { container } = render(<Testimony />);
    expect(container).toBeEmptyDOMElement();
  });
});