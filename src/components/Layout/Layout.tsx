import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SearchBar />
      <List>{children}</List>
    </main>
  );
}
