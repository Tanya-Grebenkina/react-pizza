import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyimg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Кошик порожній <span>🥺</span>
    </h2>
    <p>
      Ймовірніше Ви ще не замовили піццу.
      <br />
      Для того щоб замовити піццу перейдіть на головну сторінку.
    </p>
    <img src={cartEmptyimg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутися назад</span>
    </Link>
  </div>
);

export default CartEmpty;
