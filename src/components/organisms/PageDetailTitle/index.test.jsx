import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageDetailTitle from './index';
describe('PageDetailTitle Component', () => {
  const data = {
    name: 'Village House',
    city: 'Bogor',
    country: 'Indonesia',
  };
  const breadcrumb = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '' },
  ];
  it('should render title, location and breadcrumbs correctly', () => {
    render(
      <BrowserRouter>
        <PageDetailTitle data={data} breadcrumb={breadcrumb} />
      </BrowserRouter>
    );
    expect(screen.getByText('Village House')).toBeInTheDocument();
    expect(screen.getByText('Bogor, Indonesia')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('House Details')).toBeInTheDocument();
  });
});