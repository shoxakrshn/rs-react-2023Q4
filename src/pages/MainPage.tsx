import { useAppSelector } from '../store/hooks';
import { selectControl } from '../store/slices/control.slice';
import { Link } from 'react-router-dom';
import { selectUncontrol } from '../store/slices/uncontrol.slice';

const MainPage: React.FC = () => {
  const controlFormData = useAppSelector(selectControl);
  const uncontrolFormData = useAppSelector(selectUncontrol);

  return (
    <>
      <nav>
        <Link to="controlled" className="mr-16">
          Controlled
        </Link>
        <Link to="uncontrolled">Uncontrolled</Link>
      </nav>
      <div className="flex gap-8">
        <ul>
          controled Form:
          <li>Name: {controlFormData.name}</li>
          <li>Age: {controlFormData.age}</li>
          <li>Email: {controlFormData.email}</li>
          <li>Password: {controlFormData.password}</li>
          <li>Country: {controlFormData.country}</li>
          <li>
            <img src={`data:image/png;base64,${controlFormData.picture}`} />
          </li>
        </ul>
        <ul>
          uncontroled Form:
          <li>Name: {uncontrolFormData.name}</li>
          <li>Age: {uncontrolFormData.age}</li>
          <li>Email: {uncontrolFormData.email}</li>
          <li>Password: {uncontrolFormData.password}</li>
          <li>Country: {uncontrolFormData.country}</li>
        </ul>
      </div>
    </>
  );
};

export default MainPage;
