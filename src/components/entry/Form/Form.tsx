import React from 'react';
import Button from '../Button/Button';
import './Form.sass';

function Form(): React.ReactElement {
  return (
    <form action="" className="form">
      <h2 className="form__title">Оформление заказа</h2>
      <fieldset className="form__fieldset">
        <input type="text" className="from__text-field" placeholder="Имя Фамилия" />
        <input type="text" className="from__text-field" placeholder="+ 7 904 000 80 80" />
        <input type="text" className="from__text-field" placeholder="Адрес доставки" />
      </fieldset>
      <p className="form__price-wrapper">
        Итого:
        <span className="form__price">128 000</span>
      </p>
      <Button parentClassName="form">Оформить заказ</Button>
    </form>
  );
}

export default Form;
