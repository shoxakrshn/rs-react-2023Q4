import { render, screen, fireEvent } from '../../service/test-utill';
import SearchBar from './SearchBar';

describe('Tests for the Search component', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', () => {
    render(<SearchBar setItemsPerPage={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'fukuoka' } });

    const submitButton = screen.getByRole('button', { name: 'Get heroes' });
    fireEvent.click(submitButton);

    const savedSearchValue = localStorage.getItem('searchKey');

    expect(screen.getByDisplayValue('fukuoka')).toBeInTheDocument();
    expect(savedSearchValue).toEqual('fukuoka');
  });

  it('Check that the component retrieves the value from the local storage upon mounting', () => {
    const savedValue = 'new fukuoka';
    localStorage.setItem('searchKey', savedValue);

    render(<SearchBar setItemsPerPage={() => {}} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(savedValue);
  });
});
