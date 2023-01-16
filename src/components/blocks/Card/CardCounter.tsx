import React from 'react';
import './Card.sass';

type CardCounterProps = {
  parentClassName: string
};

function CardCounter({ parentClassName }: CardCounterProps): React.ReactElement {
  return (
    <div className={`${parentClassName ? `${parentClassName}__counter` : ''} counter`}>
      <input type="number" min={1} max={99} defaultValue={1} className="counter__value" />
      <div className="counter__control-wrapper">
        <button type="button" className="counter__control-button counter__control-button--more">
          <div className="visually-hidden">Увеличить количество на единицу</div>
        </button>
        <button type="button" className="counter__control-button counter__control-button--less">
          <div className="visually-hidden">Уменьшить количество на единицу</div>
        </button>
      </div>
    </div>
  );
}

export default CardCounter;
