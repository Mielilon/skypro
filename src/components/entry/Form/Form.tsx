import React from 'react';
import { formatPrice } from '../../../helpers/formatPrice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Button from '../Button/Button';
import './Form.sass';

function Form(): React.ReactElement {
  const cartProducts = useAppSelector((state) => state.cartReducer);

  const result = cartProducts.reduce(
    (accum, current) => accum + Number(current.price) * current.count,
    0,
  );

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
        <span className="form__price">{`${formatPrice(result)} руб.`}</span>
      </p>
      <Button onClick={() => ''} parentClassName="form">Оформить заказ</Button>
    </form>
  );
}

export default Form;
