import { render, screen, fireEvent } from '../../service/test-utill';
import SearchBar from './SearchBar';

describe('Search', () => {
  it('shows typed text', () => {
    render(<SearchBar setItemsPerPage={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'fukuoka' } });

    expect(screen.getByDisplayValue('fukuoka')).toBeInTheDocument();
  });

  // it('saves value in the localstorage', () => {
  //   const { unmount } = render(<SearchBar setItemsPerPage={() => {}} />);
  //   const input = screen.getByRole('textbox');
  //   fireEvent.change(input, { target: { value: 'after change' } });

  //   unmount();

  //   expect(localStorage.getItem('searchKey')).toBe(
  //     (input as HTMLInputElement).value,
  //   );
  // });
});
