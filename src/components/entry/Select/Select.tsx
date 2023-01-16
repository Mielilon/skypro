import React from 'react';
import './Select.sass';

const options = [
  {
    id: 1,
    value: 'cheaper',
    text: 'сперва дешевле',
  },
  {
    id: 2,
    value: 'expensive',
    text: 'сперва дороже',
  },
];

type SelectProps = {
  parentClassName: string
};

function Select({ parentClassName }: SelectProps): React.ReactElement {
  return (
    <div className={`select-wrapper ${parentClassName ? `${parentClassName}__select-wrapper` : ''}`}>
      <select name="sorting" id="sorting" className="select">
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
