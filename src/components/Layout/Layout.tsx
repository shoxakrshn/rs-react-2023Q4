import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import { useGetCharactersQuery } from '@/store/query/disneyApi';
import { useAppRouter } from '@/hooks/useAppRouter';

type PropsType = {
  children?: React.ReactNode;
};

const Layout: React.FC<PropsType> = ({ children }) => {
  const { page, limit, search } = useAppRouter();

  const { data } = useGetCharactersQuery({
    search: (search as string) || '',
    pageSize: (limit as string) || '10',
    pageNumber: (page as string) || '1',
  });

  return (
    <main>
      <SearchBar />
      <List data={data}>{children}</List>
    </main>
  );
};

export default Layout;
