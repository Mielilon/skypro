import React from 'react';
import Form from '../../entry/Form/Form';
import CardList from '../../layout/CardList/CardList';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import './CartPage.sass';

function CartPage(): React.ReactElement {
  return (
    <div className="page page--cart">
      <Header />
      <Main modifierClassName="cart">
        <>
          <CardList />
          <Form />
        </>
      </Main>
    </div>
  );
}

export default CartPage;
