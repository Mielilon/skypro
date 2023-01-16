import React from 'react';
import './Card.sass';

function CardControl(): React.ReactElement {
  return (
    <div className="card__control">
      <button type="button" className="card__control-button card__control-button--cart">
        <div className="visually-hidden">В корзину</div>
      </button>
      <button type="button" className="card__control-button card__control-button--favorites">
        <div className="visually-hidden">Избранное</div>
      </button>
    </div>
  );
}

export default CardControl;
