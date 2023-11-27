import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import { useRouter } from 'next/router';
import { useGetCharactersQuery } from '@/store/query/api';

type PropsType = {
  children?: React.ReactNode;
};

const Layout: React.FC<PropsType> = ({ children }) => {
  const router = useRouter();
  const { page, limit, search } = router.query;

  const { data } = useGetCharactersQuery({
    search: (search as string) || '',
    pageSize: +(limit as string) || 10,
    pageNumber: +(page as string) || 1,
  });

  return (
    <main>
      <SearchBar />
      <List data={data}>{children}</List>
    </main>
  );
};

export default Layout;
