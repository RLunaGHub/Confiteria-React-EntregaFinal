import '../../App.css'
import React from 'react';

const CartItem = ({ id, name, quantity, price, handleRemoveItem}) => {


  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <p className="CartItem-title">Código del producto:</p>
        <p className="CartItem-value">{id}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Nombre del producto:</p>
        <p className="CartItem-value">{name}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Cantidad:</p>
        <p className="CartItem-value">{quantity}</p>
      </div>
      <div className="CartItem-info">
        <p className="CartItem-title">Precio por unidad:</p>
        <p className="CartItem-value">${price}</p>
      </div>
      <div>
      <button onClick={() => handleRemoveItem(id)}>Quitar producto</button>
      </div>
    </div>
  );
};

export default CartItem;