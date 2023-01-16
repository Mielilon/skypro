import React from 'react';
import './Card.sass';
import CardControl from './CardControl';
import CardCounter from './CardCounter';
import CardLinkList from './CardLinkList';

type CardProps = {
  parentClassName?: string
  modifierClassName?: string
  isVertical?: boolean
  isCounter?: boolean
};

function Card(
  {
    parentClassName, isVertical = false, isCounter = false, modifierClassName,
  }: CardProps,
): React.ReactElement {
  return (
    <div className={
      `${parentClassName ? `${parentClassName}__card` : ''} card ${modifierClassName ? `card--${modifierClassName}` : ''}`
}
    >
      <>
        { !isVertical && <CardControl /> }
        <img className="card__img" src="./img/tatran.jpg" alt="Кровать TATRAN" />
        <div className="card__info">
          <h3 className="card__title">Кровать TATRAN</h3>
          <p className="card__desc">Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.</p>
          <p className="card__price">120 000 руб.</p>
        </div>
        { isVertical && <CardLinkList />}
        { isVertical && isCounter && <CardCounter parentClassName="card" />}
      </>
    </div>
  );
}

export default Card;
