import React from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { cartSlice } from '../../../store/reducers/CartSlice';
import { ProductType } from '../../../types/product';
import './Card.sass';

type CardLinkListProps = {
  currentId: number
};

function CardLinkList({ currentId }: CardLinkListProps): React.ReactElement {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartReducer);

  const { deleteProduct } = cartSlice.actions;

  const findProduct = (product: ProductType) => product.id === currentId;
  const productIndex = cartProducts.findIndex(findProduct);

  const buttonDeleteHandler = () => {
    dispatch(deleteProduct(productIndex));
  };
  return (
    <div className="card__link-list">
      <button type="button" className="card__link">Избранные</button>
      <button type="button" className="card__link" onClick={buttonDeleteHandler}>Удалить</button>
    </div>
  );
}

export default CardLinkList;
