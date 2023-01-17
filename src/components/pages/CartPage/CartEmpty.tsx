import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import './CartPage.sass';

function CartEmpty(): React.ReactElement {
  return (
    <div className="cart-empty-wrapper">
      <h1 className="cart-title">
        Упс! В корзине пусто!
      </h1>
      <Link to={AppRoute.CATALOG} className="button">Перейти к покупкам</Link>
    </div>
  );
}

export default CartEmpty;
