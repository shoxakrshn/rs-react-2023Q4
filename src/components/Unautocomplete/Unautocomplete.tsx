import { useMemo, useState } from 'react';
import styles from './Unautocomplete.module.scss';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectCountries } from '../../store/slices/counries.slice';

interface AutoCompleteProps {
  errors: string | undefined;
}

const Unautocomplete = React.forwardRef<HTMLInputElement, AutoCompleteProps>(
  ({ errors }, ref) => {
    const [localValue, setLocalValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { countries } = useAppSelector(selectCountries);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
    };
    const onClickInputHandler = () => {
      setIsOpen(true);
    };

    const itemClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      const target = e.target as HTMLLIElement;
      setLocalValue(target.textContent || '');
      setIsOpen(false);
    };

    const filteredCountries = useMemo(
      () =>
        countries.filter((country) =>
          country.toLocaleLowerCase().includes(localValue.toLowerCase()),
        ),
      [localValue, countries],
    );

    return (
      <div className="relative">
        <label htmlFor="country">
          <input
            id="country"
            name="country"
            type="text"
            ref={ref}
            placeholder="Country search..."
            value={localValue}
            onChange={onChangeHandler}
            onClick={onClickInputHandler}
            className="relative px-3 py-2 border rounded"
          />
        </label>
        {localValue && isOpen && (
          <ul className={styles.autocomplete}>
            {filteredCountries.map((country, idx) => (
              <li onClick={itemClickHandler} className={styles.item} key={idx}>
                {country}
              </li>
            ))}
          </ul>
        )}
        {errors && <p className="absolute text-red-400 text-sm">{errors}</p>}
      </div>
    );
  },
);

export default Unautocomplete;
