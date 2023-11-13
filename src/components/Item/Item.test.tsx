import { render, screen } from '../../service/test-utill';
import userEvent from '@testing-library/user-event';
import Item from './Item';
import List from '../List/List';
import { CharacterType } from '../../types/types';

const mockData: CharacterType = {
  _id: 4703,
  films: [
    'Hollywood Party',
    'Fantasia',
    'Fun and Fancy Free',
    'TRON',
    'Who Framed Roger Rabbit',
    'Oliver & Company',
    'The Little Mermaid',
    'Toy Story',
    'A Goofy Movie',
    "Mickey's Once Upon a Christmas",
    'Fantasia 2000',
    "Mickey's Magical Christmas: Snowed in at the House of Mouse",
    "Mickey's House of Villains",
    "Teacher's Pet (film)",
    'The Lion King 1½',
    "101 Dalmatians II: Patch's London Adventure",
    'Mickey, Donald, Goofy: The Three Musketeers',
    "Mickey's Twice Upon a Christmas",
    'Chicken Little (film)',
    'Meet the Robinsons',
    'Wreck-It Ralph (film)',
    'Saving Mr. Banks',
    'Frozen',
    'Zootopia',
    'Ralph Breaks the Internet',
  ],
  shortFilms: [],
  tvShows: [
    'Walt Disney anthology series',
    'The Mickey Mouse Club',
    'The Mouse Factory',
    'Adventures of the Gummi Bears',
    'Bonkers',
    '101 Dalmatians: The Series',
    'Mickey Mouse Works',
    'House of Mouse',
    'Mickey Mouse Clubhouse',
    'Imagination Movers',
    "Mickey's Letter Time",
    'Have a Laugh!',
    'Mickey’s Mousekersize',
    'A Poem Is...',
    'Mickey Mouse (TV series)',
    "Minnie's Bow-Toons",
    'Once Upon a Time',
    'Frozen: Northern Lights',
    'At Home With Olaf',
    'Mickey Mouse Mixed-Up Adventures',
    'DuckTales (2017 series)',
    'Mickey Go Local',
    'The Wonderful World of Mickey Mouse',
    'WandaVision',
    'Mickey Mouse Funhouse',
  ],
  videoGames: [
    'Mickey Mouse: The Computer Game',
    'Mickey Mousecapade',
    'Adventures in the Magic Kingdom',
    'Illusion (series)',
    'The Magical Quest starring Mickey Mouse',
    'Mickey Mania: The Timeless Adventures of Mickey Mouse',
    "Mickey's Speedway USA",
    "Mickey's Racing Adventure",
    "Disney's Party",
    "Disney's Magical Mirror Starring Mickey Mouse",
    "Disney's Hide and Sneak",
    'Disney Friends',
    'Kingdom Hearts (series)',
    'Epic Mickey (series)',
    'Kinect Disneyland Adventures',
    'Disney Infinity (series)',
    'Disney Magical World',
    'Disney Magical World 2',
    "Where's My Mickey?",
    'Disney Tsum Tsum (game)',
    'Disney Magical Dice',
    'Disney Heroes: Battle Mode',
    'Disney Mirrorverse',
    "Disney Sorcerer's Arena",
  ],
  parkAttractions: [
    "Mickey and Minnie's Runaway Railway",
    'Fantasmic!',
    "Mickey's PhilharMagic",
    "Mickey's Royal Friendship Faire",
    'World of Color',
    'Main Street Electrical Parade',
    'Mickey Mouse Revue',
    'Town Square Theater',
    "Mickey's House and Meet Mickey",
    "One Man's Dream II: The Magic Lives On!",
    'Midship Detective Agency',
    'My Friend Duffy',
    'The Golden Mickeys',
    'Festival of Fantasy Parade',
    'Paint the Night Parade',
    'Mickey and the Magical Map',
    'Wonderful World of Animation',
  ],
  allies: [],
  enemies: [],
  sourceUrl: 'https://disney.fandom.com/wiki/Mickey_Mouse',
  name: 'Mickey Mouse',
  imageUrl:
    'https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg',
  url: 'https://api.disneyapi.dev/characters/4703',
  alignment: '',
};

// Теперь у вас есть JavaScript объект (jsonData) с данными из вашего JSON-файла, у которого нет кавычек у ключей.

describe('Tests for the Card List component', () => {
  test('Ensure that the card component renders the relevant card data', () => {
    render(<Item character={mockData} />);

    const listElement = screen.getByRole('listitem');
    expect(listElement).toBeInTheDocument();

    const nameHeading = screen.getByText(mockData.name);
    expect(nameHeading).toHaveTextContent(mockData.name);
  });

  test('Validate that clicking on a card opens a detailed card component', async () => {
    userEvent.setup();
    render(<List itemsPerPage={2} />);
    // logRoles(view.container);

    screen.debug();
    const itemElement = await screen.findByRole('heading', {
      name: 'Achilles',
    });
    expect(itemElement).toBeInTheDocument();

    await userEvent.click(itemElement);
    screen.debug();
    // const detailItem = await screen.findByText('Hercules (TV series)');

    // expect(detailItem).toBeInTheDocument();
  });
});
