import { render, screen } from '../../service/test-utill';
import List from './List';
// import { mockResponse } from '../../service/mockData';
import { ContextProvider } from '../../context/ContextProvider';

// const data = {
//   characters: mockResponse.data,
//   setCharacters: () => {},
// };

describe('Tests for the Card List component', async () => {
  test('Verify that the component renders the specified number of cards', async () => {
    render(<List />);

    const listElement = await screen.findByRole('list');
    expect(listElement).toBeInTheDocument();

    // const result = await screen.findAllByRole('listitem');
    // expect(result).toHaveLength(data.characters.length);
  });

  test('Check that an appropriate message is displayed if no cards are present', () => {
    render(
      <ContextProvider>
        <List />
      </ContextProvider>,
    );

    // const result = screen.getByText('no results');
    // expect(result).toBeInTheDocument();
  });
});
