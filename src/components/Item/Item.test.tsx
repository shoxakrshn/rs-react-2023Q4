import { render, screen } from '../../service/test-utill';
import Item from './Item';
import { CharacterType } from '../../types/types';

const mockData: CharacterType = {
  _id: 112,
  url: '',
  name: 'Alladin',
  sourceUrl: '',
  films: [],
  shortFilms: [],
  tvShows: [],
  videoGames: [],
  alignment: '',
  parkAttractions: [],
  allies: [],
  enemies: [],
  imageUrl: 'string',
};

describe('Tests for the Card List component', () => {
  test('Ensure that the card component renders the relevant card data', () => {
    render(<Item character={mockData} />);

    const listElement = screen.getByRole('listitem');
    expect(listElement).toBeInTheDocument();

    const nameHeading = screen.getByText(mockData.name);
    expect(nameHeading).toHaveTextContent(mockData.name);
  });

  // test('Validate that clicking on a card opens a detailed card component', async () => {
  //   userEvent.setup();
  //   render(<Item character={mockData} />);

  //   const listElement = screen.getByRole('heading');
  //   await userEvent.click(listElement);

  //   const detailedElement = screen.findByRole();
  // });
});
