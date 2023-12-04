import { UserType, userSchema } from '../../utils/validation.schema';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { convertBase64 } from '../../utils/convertBase64';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import { useAppDispatch } from '../../store/hooks';
import { saveControlledData } from '../../store/slices/control.slice';
import { useNavigate } from 'react-router-dom';

export const ControlledForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<UserType>({
    mode: 'onChange',
    resolver: yupResolver(userSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (values: UserType) => {
    if (values.picture) {
      const pictureFile = values.picture[0];
      const pictureBase64 = await convertBase64(pictureFile);

      const valueTosave = { ...values, picture: pictureBase64 };

      dispatch(saveControlledData(valueTosave));
      navigate('/');
    }
  };

  return (
    <>
      <h1 className="mb-4 font-bold">Controlled Form</h1>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        className="flex flex-col border rounded p-6 gap-8"
      >
        <label htmlFor="name" className="grow">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="block px-3 py-2 border rounded relative"
            {...register('name')}
          />
          {errors.name && (
            <p className="absolute text-red-400 text-sm">
              {errors.name.message}
            </p>
          )}
        </label>
        <label htmlFor="age">
          <input
            type="number"
            id="age"
            placeholder="age"
            className="px-3 py-2 border rounded relative"
            {...register('age')}
          />
          {errors.age && (
            <p className="absolute text-red-400 text-sm">
              {errors.age.message}
            </p>
          )}
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="email"
            className="px-3 py-2 border rounded relative"
            {...register('email')}
          />
          {errors.email && (
            <p className="absolute text-red-400 text-sm">
              {errors.email.message}
            </p>
          )}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="password"
            className="px-3 py-2 border rounded"
            {...register('password')}
          />
          {errors.password && (
            <p className="absolute text-red-400 text-sm">
              {errors.password.message}
            </p>
          )}
        </label>

        <label htmlFor="confirmPassword">
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirm password"
            className="px-3 py-2 border rounded relative"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="absolute text-red-400 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </label>
        <select
          className="px-3 py-2 border rounded relative"
          {...register('gender')}
        >
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
        </select>
        {errors.gender && (
          <p className="absolute text-red-400 text-sm">
            {errors.gender.message}
          </p>
        )}

        <label htmlFor="agreement">
          <input
            type="checkbox"
            id="agreement"
            className="mr-2"
            {...register('agreement')}
          />
          <span>I accept terms and condition</span>
          {errors.agreement && (
            <p className="absolute text-red-400 text-sm">
              {errors.agreement.message}
            </p>
          )}
        </label>
        <label htmlFor="picture">
          <input
            type="file"
            id="picture"
            accept=".png, .jpg, .jpeg"
            className="px-3 py-2 rounded relative"
            {...register('picture')}
          />
          {errors.picture && (
            <p className="absolute text-red-400 text-sm">
              {errors.picture.message}
            </p>
          )}
        </label>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Autocomplete onChange={onChange} errors={error?.message} />
          )}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};
