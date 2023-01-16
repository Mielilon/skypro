import React from 'react';
import Card from '../../blocks/Card/Card';
import Button from '../../entry/Button/Button';
import './CardList.sass';

function CardList(): React.ReactElement {
  return (
    <div className="card-list">
      <div className="card-list__header">
        <p className="cart-list__header-item">Товар</p>
        <p className="cart-list__header-item">Количество</p>
      </div>
      <div className="card-list__items">
        <Card
          parentClassName="card-list"
          modifierClassName="vertical"
          isVertical
          isCounter
        />
        <Card
          parentClassName="card-list"
          modifierClassName="vertical"
          isVertical
          isCounter
        />
        <Card
          parentClassName="card-list"
          modifierClassName="vertical"
          isVertical
          isCounter
        />
        <Card
          parentClassName="card-list"
          modifierClassName="vertical"
          isVertical
          isCounter
        />
      </div>
      <div className="card-list__control">
        <Button parentClassName="card-list">Очистить корзину</Button>
        <Button parentClassName="card-list" modifierClassName="darken">Очистить корзину</Button>
      </div>
    </div>
  );
}

export default CardList;
