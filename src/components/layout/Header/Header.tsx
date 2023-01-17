import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Logo from '../../blocks/Logo/Logo';
import './Header.sass';

function Header(): React.ReactElement {
  const cartProducts = useAppSelector((state) => state.cartReducer);

  let cardProdutNumber = 0;
  if (cartProducts.length !== 0) {
    cardProdutNumber = cartProducts.reduce((accum, current) => (accum + current.count), 0);
  }

  return (
    <header className="header">
      <div className="header__container container">
        <Logo parentClassName="header" />
        <nav className="header__nav nav">
          <ul className="header__menu menu">
            <li className="menu__item">
              <Link to={AppRoute.CATALOG} className="menu__link">Каталог</Link>
            </li>
            <li className="menu__item">
              <Link to={AppRoute.CART} className="menu__link">
                Корзина
                {cardProdutNumber !== 0 ? ` (${cardProdutNumber})` : ''}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
