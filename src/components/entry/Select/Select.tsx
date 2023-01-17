import React, { useEffect, useState } from 'react';
import './Select.sass';

const options = [
  {
    id: 1,
    value: 'descending',
    text: 'сперва дешевле',
  },
  {
    id: 2,
    value: 'ascending',
    text: 'сперва дороже',
  },
];

type SelectProps = {
  parentClassName: string
  setSortType: React.Dispatch<React.SetStateAction<string>>
};

function Select({ parentClassName, setSortType }: SelectProps): React.ReactElement {
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    setSortType(selectValue);
  }, [selectValue]);

  const selectChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className={`select-wrapper ${parentClassName ? `${parentClassName}__select-wrapper` : ''}`}>
      <select
        name="sorting"
        id="sorting"
        className="select"
        value={selectValue}
        onChange={(e) => selectChangeHandle(e)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value} className="select__option">
            Порядок:
            {' '}
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
