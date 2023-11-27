import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Pagination from '@/components/Pagination/Pagination';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Pagination nextPage={null} prevPage={null} />
      </RouterContext.Provider>,
    );

    const element = screen.getByRole('button', { name: 'Next' });
    expect(element).toBeInTheDocument();
  });
});
