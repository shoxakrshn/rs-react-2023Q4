import { useAppSelector } from '../store/hooks';
import { selectControl } from '../store/slices/control.slice';
import { Link } from 'react-router-dom';
import { selectUncontrol } from '../store/slices/uncontrol.slice';

const MainPage: React.FC = () => {
  const controlFormData = useAppSelector(selectControl);
  const uncontrolFormData = useAppSelector(selectUncontrol);

  return (
    <div className="flex gap-8">
      <div>
        <Link to="controlled" className="text-xl">
          Controlled
        </Link>

        <ul className="mt-4">
          <li className="font-medium">Name: {controlFormData.name}</li>
          <li className="font-medium">Age: {controlFormData.age}</li>
          <li className="font-medium">Email: {controlFormData.email}</li>
          <li className="font-medium">Password: {controlFormData.password}</li>
          <li className="font-medium">Country: {controlFormData.country}</li>
          <li>
            <img src={controlFormData.picture} width={240} />
          </li>
        </ul>
      </div>
      <div>
        <Link to="uncontrolled" className="text-xl">
          Uncontrolled
        </Link>
        <ul className="mt-4">
          <li className="font-medium">Name: {uncontrolFormData.name}</li>
          <li className="font-medium">Age: {uncontrolFormData.age}</li>
          <li className="font-medium">Email: {uncontrolFormData.email}</li>
          <li className="font-medium">
            Password: {uncontrolFormData.password}
          </li>
          <li className="font-medium">Country: {uncontrolFormData.country}</li>
          <li className="font-medium">
            <img src={uncontrolFormData.picture} width={240} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
