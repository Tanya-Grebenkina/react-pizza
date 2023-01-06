import React from 'react';
import { Link } from 'react-router-dom';

import cartEmpty from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Кошик порожній <b>🥺</b>
        </h2>
        <p>
          Ймовірніше Ви ще не замовили піццу.
          <br />
          Для того щоб замовити піццу перейдіть на головну сторінку.
        </p>
        <img src={cartEmpty} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
