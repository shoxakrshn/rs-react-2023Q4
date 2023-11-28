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

  test('Verify search query-param after submitting', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBar />
      </RouterContext.Provider>,
    );

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: 'Get heroes' });

    expect(mockRouter.query).toEqual({ page: '1', limit: '10' });

    fireEvent.change(inputElement, { target: { value: 'fukuoka' } });
    fireEvent.click(buttonElement);

    expect(mockRouter.query).toEqual({
      page: '1',
      limit: '10',
      search: 'fukuoka',
    });

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(buttonElement);
    expect(mockRouter.query).toEqual({ page: '1', limit: '10' });
  });

  test('Verify limit query-param after submitting', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBar />
      </RouterContext.Provider>,
    );

    const selectElement = screen.getByRole('combobox');
    expect(mockRouter.query).toEqual({ page: '1', limit: '10' });

    fireEvent.change(selectElement, { target: { value: '20' } });
    expect(mockRouter.query).toEqual({ page: '1', limit: '20' });
  });
});
