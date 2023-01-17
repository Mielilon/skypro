import React from 'react';
import { CounterValue } from '../../../const';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { cartSlice } from '../../../store/reducers/CartSlice';
import { ProductType } from '../../../types/product';
import './Card.sass';

type CardCounterProps = {
  parentClassName: string
  currentId: number
};

function CardCounter({ parentClassName, currentId }: CardCounterProps): React.ReactElement {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartReducer);

  const { increaseProductCounter, decreaseProductCounter } = cartSlice.actions;

  const findProduct = (product: ProductType) => product.id === currentId;
  const productIndex = cartProducts.findIndex(findProduct);

  const buttonIncreaseHandler = () => {
    if (cartProducts[productIndex].count === CounterValue.MAX) return;
    dispatch(increaseProductCounter(productIndex));
  };
  const buttonDecreaseHandler = () => {
    if (cartProducts[productIndex].count === CounterValue.MIN) return;
    dispatch(decreaseProductCounter(productIndex));
  };

  return (
    <div className={`${parentClassName ? `${parentClassName}__counter` : ''} counter`}>
      <p className="counter__value">{cartProducts[productIndex].count}</p>
      <div className="counter__control-wrapper">
        <button
          type="button"
          className="counter__control-button counter__control-button--more"
          onClick={buttonIncreaseHandler}
        >
          <div className="visually-hidden">Увеличить количество на единицу</div>
        </button>
        <button
          type="button"
          className="counter__control-button counter__control-button--less"
          onClick={buttonDecreaseHandler}
        >
          <div className="visually-hidden">Уменьшить количество на единицу</div>
        </button>
      </div>
    </div>
  );
}

export default CardCounter;
