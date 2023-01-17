import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { cartSlice } from '../../../store/reducers/CartSlice';
import Card from '../../blocks/Card/Card';
import Button from '../../entry/Button/Button';
import './CardList.sass';

function CardList(): React.ReactElement {
  const cartProducts = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const { deleteAllProducts } = cartSlice.actions;

  const buttonDeleteHandler = () => {
    dispatch(deleteAllProducts());
  };
  return (
    <div className="card-list">
      <div className="card-list__header">
        <p className="cart-list__header-item">Товар</p>
        <p className="cart-list__header-item">Количество</p>
      </div>
      <div className="card-list__items">
        {cartProducts.map((product) => (
          <Card
            parentClassName="card-list"
            modifierClassName="vertical"
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
            isVertical
            isCounter
          />
        ))}
      </div>
      <div className="card-list__control">
        <Button onClick={buttonDeleteHandler} parentClassName="card-list">Очистить корзину</Button>
        <Link to={AppRoute.CATALOG} className="card-list__button button button--darken">Продолжить покупки</Link>
      </div>
    </div>
  );
}

export default CardList;
