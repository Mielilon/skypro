import React from 'react';
import { formatPrice } from '../../../helpers/formatPrice';
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
  id: number
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
    id,
  }: CardProps,
): React.ReactElement {
  return (
    <div className={
      `${parentClassName ? `${parentClassName}__card` : ''} card ${modifierClassName ? `card--${modifierClassName}` : ''}`
}
    >
      <>
        { !isVertical && <CardControl currentId={id} /> }
        <img className="card__img" src={`./img/${img}`} alt={title} />
        <div className="card__info">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{desc}</p>
          <p className="card__price">{`${formatPrice(price)} руб.`}</p>
        </div>
        { isVertical && <CardLinkList currentId={id} />}
        { isVertical && isCounter && <CardCounter parentClassName="card" currentId={id} />}
      </>
    </div>
  );
}

export default Card;
