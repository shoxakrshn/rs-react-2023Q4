import { useRef, useState } from 'react';
import { userSchema } from '../../utils/validation.schema';
import { convertBase64 } from '../../utils/convertBase64';
import Unautocomplete from '../Unautocomplete/Unautocomplete';
import * as yup from 'yup';
import { useAppDispatch } from '../../store/hooks';
import { saveUncontrolledData } from '../../store/slices/uncontrol.slice';
import { useNavigate } from 'react-router-dom';

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  agreement?: string;
  picture?: string;
  country?: string;
}

export const UncontrolledForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const autoCompleteRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formValues = Object.fromEntries(formData.entries());

      const agreement = checkRef.current?.checked as boolean;
      const picture = fileRef.current?.files;

      try {
        const validValues = await userSchema.validate(
          { ...formValues, agreement, picture },
          {
            abortEarly: false,
          },
        );

        setErrors({});
        const pictureFile = picture && picture[0];

        if (pictureFile) {
          const pictureBase64 = await convertBase64(pictureFile);

          dispatch(
            saveUncontrolledData({
              ...validValues,
              agreement,
              picture: pictureBase64,
            }),
          );

          navigate('/');

          console.log(validValues);
        }
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const newErrors = err.inner.reduce((acc, currentError) => {
            const key = currentError.path as keyof FormErrors;
            acc[key] = currentError.message;
            return acc;
          }, {} as FormErrors);

          setErrors(newErrors);
        }
      }
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmitHandler}
      noValidate
      className="flex flex-col border rounded p-6 gap-8"
    >
      <label htmlFor="name" className="grow">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="block px-3 py-2 border rounded relative"
        />
        {errors?.name && (
          <p className="absolute text-red-400 text-sm">{errors.name}</p>
        )}
      </label>
      <label htmlFor="age">
        <input
          type="number"
          id="age"
          name="age"
          placeholder="age"
          className="px-3 py-2 border rounded relative"
        />
        {errors?.age && (
          <p className="absolute text-red-400 text-sm">{errors.age}</p>
        )}
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="px-3 py-2 border rounded relative"
        />
        {errors?.email && (
          <p className="absolute text-red-400 text-sm">{errors.email}</p>
        )}
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className="px-3 py-2 border rounded"
        />
        {errors?.password && (
          <p className="absolute text-red-400 text-sm">{errors.password}</p>
        )}
      </label>

      <label htmlFor="confirmPassword">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          className="px-3 py-2 border rounded relative"
        />
        {errors?.confirmPassword && (
          <p className="absolute text-red-400 text-sm">
            {errors.confirmPassword}
          </p>
        )}
      </label>
      <select className="px-3 py-2 border rounded relative" name="gender">
        <option value={'male'}>Male</option>
        <option value={'female'}>Female</option>
      </select>
      {errors?.gender && (
        <p className="absolute text-red-400 text-sm">{errors.gender}</p>
      )}

      <label htmlFor="agreement">
        <input
          type="checkbox"
          id="agreement"
          className="mr-2"
          name="agreement"
          ref={checkRef}
        />
        <span>I accept terms and condition</span>
        {errors?.agreement && (
          <p className="absolute text-red-400 text-sm">{errors.agreement}</p>
        )}
      </label>
      <label htmlFor="picture">
        <input
          type="file"
          id="picture"
          name="picture"
          ref={fileRef}
          accept=".png, .jpg, .jpeg"
          className="px-3 py-2 rounded relative"
        />
        {errors?.picture && (
          <p className="absolute text-red-400 text-sm">{errors.picture}</p>
        )}
      </label>
      <Unautocomplete ref={autoCompleteRef} errors={errors?.country} />

      <button type="submit">Submit</button>
    </form>
  );
};
