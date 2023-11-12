import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h1>Not Found Page</h1>
      <Link to="/page/1">Back to Main Page</Link>
    </>
  );
};

export default NotFoundPage;
