import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useGetDetailsQuery } from '../../redux/api';
import DetailCard from '../../components/DeatilCard/DetailCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBasic, updateLoaderDetails } from '../../redux/slice';
import { useEffect } from 'react';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { loaderDetails } = useAppSelector(selectBasic);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetDetailsQuery(id as string);

  useEffect(() => {
    dispatch(updateLoaderDetails(isFetching));
  }, [isFetching]);

  if (loaderDetails) return <Loader />;

  return <DetailCard character={data?.data} />;
};

export default DetailPage;
