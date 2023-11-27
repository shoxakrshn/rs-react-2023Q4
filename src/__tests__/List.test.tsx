import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import List from '@/components/List/List';
import { mockResponse } from './mockedData';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <List data={mockResponse} />
      </RouterContext.Provider>,
    );

    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();
  });
});
