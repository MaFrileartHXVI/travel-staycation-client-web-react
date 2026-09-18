import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumb from './index';
describe('Breadcrumb Component', () => {
  const data = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '/properties/1' },
  ];
  it('should render correct number of breadcrumb items', () => {
    render(
      <BrowserRouter>
        <Breadcrumb data={data} />
      </BrowserRouter>
    );
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });
  it('should render the last item as active and plain text (not a link)', () => {
    render(
      <BrowserRouter>
        <Breadcrumb data={data} />
      </BrowserRouter>
    );
    const items = screen.getAllByRole('listitem');
    const lastItem = items[items.length - 1];
    expect(lastItem).toHaveClass('active');
    expect(lastItem.querySelector('a')).toBeNull();
    expect(lastItem.textContent).toBe('House Details');
  });
  it('should render non-last items as links', () => {
    render(
      <BrowserRouter>
        <Breadcrumb data={data} />
      </BrowserRouter>
    );
    const firstItem = screen.getAllByRole('listitem')[0];
    const link = firstItem.querySelector('a');
    expect(firstItem).not.toHaveClass('active');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(link.textContent).toBe('Home');
  });
});