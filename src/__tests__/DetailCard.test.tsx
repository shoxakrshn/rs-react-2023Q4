import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { expect, test } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import DetailCard from '@/components/DeatilCard/DetailCard';
import { mockCharacter } from './mockedData';

describe('SearchBar test', () => {
  mockRouter.setCurrentUrl('/?page=1&limit=10');

  test('The component is rendered', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <DetailCard character={mockCharacter} />
      </RouterContext.Provider>,
    );

    const element = screen.getByText('Tv Shows:');
    expect(element).toBeInTheDocument();
  });
});
