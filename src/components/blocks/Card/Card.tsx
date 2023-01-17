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
  img: string
  title: string
  desc: string
  price: string
};

function Card(
  {
    parentClassName,
    isVertical = false,
    isCounter = false,
    modifierClassName,
    img,
    title,
    desc,
    price,
  }: CardProps,
): React.ReactElement {
  return (
    <div className={
      `${parentClassName ? `${parentClassName}__card` : ''} card ${modifierClassName ? `card--${modifierClassName}` : ''}`
}
    >
      <>
        { !isVertical && <CardControl /> }
        <img className="card__img" src={`./img/${img}`} alt={title} />
        <div className="card__info">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{desc}</p>
          <p className="card__price">{`${price.split(/(?=(?:\d{3})+(?!\d))/).join(' ')} руб.`}</p>
        </div>
        { isVertical && <CardLinkList />}
        { isVertical && isCounter && <CardCounter parentClassName="card" />}
      </>
    </div>
  );
}

export default Card;
