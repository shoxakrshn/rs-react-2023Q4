// import userEvent from '@testing-library/user-event';
import { render, screen } from '../../service/test-utill';
import DetailPage from './DetailPage';

describe('DetailCard', () => {
  test('Check that a loading indicator is displayed while fetching data', () => {
    render(<DetailPage />);

    const loadingElelemt = screen.getByText('Loading...');
    expect(loadingElelemt).toBeInTheDocument();
  });

  // test('Make sure the detailed card component correctly displays the detailed card data', async () => {
  //   render(<DetailPage />);

  //   const loadingElelemt = await screen.findByRole('listitem', {
  //     name: 'Achilles',
  //   });
  //   expect(loadingElelemt).toBeInTheDocument();
  // });

  // test('Check if Close button works correctly', () => {
  //   const mockNavigate = vi.fn();

  //   render(<DetailPage />);

  //   const closeButton = screen.getByText('Close');
  //   userEvent.click(closeButton);

  //   expect(mockNavigate).toHaveBeenCalledWith(`/page/1`);
  // });
});
