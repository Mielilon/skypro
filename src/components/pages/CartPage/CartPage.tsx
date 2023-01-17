import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Form from '../../entry/Form/Form';
import CardList from '../../layout/CardList/CardList';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import CartEmpty from './CartEmpty';
import './CartPage.sass';

function CartPage(): React.ReactElement {
  const cartProducts = useAppSelector((state) => state.cartReducer);

  return (
    <div className="page page--cart">
      <Header />
      <Main modifierClassName="cart">
        {cartProducts.length === 0
          ? <CartEmpty />
          : (
            <>
              <CardList />
              <Form />
            </>
          )}
      </Main>
    </div>
  );
}

export default CartPage;
