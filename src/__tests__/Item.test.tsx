import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import CardItem from '@/components/Item/Item';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockCharacter } from './mockedData';

describe('Item test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <CardItem character={mockCharacter} />
      </RouterContext.Provider>,
    );

    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();
  });

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <CardItem character={mockCharacter} />
      </RouterContext.Provider>,
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(mockRouter.asPath).toEqual(
      `/character/${mockCharacter._id}?page=1&limit=10`,
    );
  });
});
