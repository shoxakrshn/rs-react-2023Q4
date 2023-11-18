import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useGetDetailsQuery } from '../../redux/api';
import DetailCard from '../../components/DeatilCard/DetailCard';

const DetailPage: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetDetailsQuery(id as string);

  if (isLoading) return <Loader />;

  return <DetailCard character={data?.data} />;
};

export default DetailPage;
