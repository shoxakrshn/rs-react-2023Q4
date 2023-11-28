import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Pagination from '@/components/Pagination/Pagination';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Pagination nextPage={'null'} prevPage={null} />
      </RouterContext.Provider>,
    );

    const element = screen.getByRole('button', { name: 'Next' });
    expect(element).toBeInTheDocument();
  });

  test('Verify limit query-param after submitting', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Pagination
          nextPage={'http://api.disneyapi.dev/character?page=2&pageSize=10'}
          prevPage={'http://api.disneyapi.dev/character?page=2&pageSize=10'}
        />
      </RouterContext.Provider>,
    );

    const nextButton = screen.getByRole('button', { name: 'Next' });
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(mockRouter.query).toEqual({ page: 2, limit: '10' });

    fireEvent.click(prevButton);
    expect(mockRouter.query).toEqual({ page: 0, limit: '10' });
  });

  test('Verify next page is disabled for the last page', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Pagination
          nextPage={null}
          prevPage={'http://api.disneyapi.dev/character?page=2&pageSize=10'}
        />
      </RouterContext.Provider>,
    );

    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeDisabled();
  });

  test('Verify prev page is disabled for the first page', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Pagination
          nextPage={'http://api.disneyapi.dev/character?page=2&pageSize=10'}
          prevPage={null}
        />
      </RouterContext.Provider>,
    );

    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeDisabled();
  });
});
