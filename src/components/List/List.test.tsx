import { render, screen } from '../../service/test-utill';
import List from './List';
import { mockResponse } from '../../service/mockData';
import { ContextProvider } from '../../context/ContextProvider';

const data = {
  characters: mockResponse.data,
  setCharacters: () => {},
};

describe('Tests for the Card List component', () => {
  test('Verify that the component renders the specified number of cards', async () => {
    render(<List itemsPerPage={data.characters.length} />);

    const listElement = await screen.findByRole('list');
    expect(listElement).toBeInTheDocument();

    const result = screen.getAllByRole('listitem');
    expect(result).toHaveLength(data.characters.length);
  });

  test('Check that an appropriate message is displayed if no cards are present', () => {
    render(
      <ContextProvider>
        <List itemsPerPage={10} />
      </ContextProvider>,
    );

    const result = screen.getByText('no results');
    expect(result).toBeInTheDocument();
  });
});
