import '../../App.css';
import './CartItem.css';
import React from 'react';

const CartItem = ({ id, title, quantity, price, img, handleRemoveItem}) => {


  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <p className="CartItem-title">Código:</p>
        <p className="CartItem-value">{id}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Producto:</p>
        <p className="CartItem-value">{title}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Cantidad:</p>
        <p className="CartItem-value">{quantity}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Precio por unidad:</p>
        <p className="CartItem-value">${price}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Imagen:</p>
        <p className="CartItem-value">{img}</p>
      </div>
      <div>
      <button onClick={() => handleRemoveItem(id)}>Quitar producto</button>
      </div>
    </div>
  );
};

export default CartItem;