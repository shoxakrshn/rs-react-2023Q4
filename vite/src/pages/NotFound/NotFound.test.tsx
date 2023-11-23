import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFound';

describe('Tests for the 404 Page component', () => {
  const badRoute = '/';
  test('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <NotFoundPage />
      </MemoryRouter>,
    );

    const notFoundPage = screen.getByText('Not Found Page');
    expect(notFoundPage).toBeInTheDocument();
  });
});
