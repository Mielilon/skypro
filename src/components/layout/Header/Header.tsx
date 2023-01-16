import React from 'react';
import Logo from '../../../assets/img/logo.svg';
import './Header.sass';

function Header(): React.ReactElement {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo className="header__logo logo" />
        <nav className="header__nav nav">
          <ul className="header__menu menu">
            <li className="menu__item">
              <a href="фыва" className="menu__link">Каталог</a>
            </li>
            <li className="menu__item">
              <a href="ыфва" className="menu__link">Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
