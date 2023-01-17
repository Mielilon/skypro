import React from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { productData } from '../../../mocks/product';
import { cartSlice } from '../../../store/reducers/CartSlice';
import { ProductType } from '../../../types/product';
import './Card.sass';

type CardControlProps = {
  currentId: number
};
function CardControl({ currentId }: CardControlProps): React.ReactElement {
  const { addProduct, increaseProductCounter } = cartSlice.actions;
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartReducer);

  const buttonAddCartClickHandler = () => {
    const findProduct = (product: ProductType) => product.id === currentId;

    const currentProduct = productData.find(findProduct);
    if (cartProducts.find(findProduct)) {
      const productIndex = cartProducts.findIndex(findProduct);
      dispatch(increaseProductCounter(productIndex));
      return;
    }

    if (currentProduct !== undefined) {
      dispatch(addProduct({
        ...currentProduct,
        count: 1,
      }));
    }
  };

  return (
    <div className="card__control">
      <button type="button" className="card__control-button card__control-button--cart" onClick={buttonAddCartClickHandler}>
        <div className="visually-hidden">В корзину</div>
      </button>
      <button type="button" className="card__control-button card__control-button--favorites">
        <div className="visually-hidden">Избранное</div>
      </button>
    </div>
  );
}

export default CardControl;
