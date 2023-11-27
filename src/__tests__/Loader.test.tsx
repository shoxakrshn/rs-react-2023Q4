import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Loader from '@/components/Loader/Loader';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Loader />
      </RouterContext.Provider>,
    );

    const element = screen.getByText('Loading...');
    expect(element).toBeInTheDocument();
  });
});
