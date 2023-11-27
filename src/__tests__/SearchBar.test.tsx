import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar/SearchBar';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBar />
      </RouterContext.Provider>,
    );

    const element = screen.getByRole('button', { name: 'Get heroes' });
    expect(element).toBeInTheDocument();
  });

  test('Verify inputing search term', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBar />
      </RouterContext.Provider>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'fukuoka' } });
    expect(screen.getByDisplayValue('fukuoka')).toBeInTheDocument();
  });
});
