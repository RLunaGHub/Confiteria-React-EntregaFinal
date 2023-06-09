import './Checkout.css';
import "../../App.css";
import { useState, useContext } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, surname, phone, email, confirmEmail }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          surname,
          phone,
          email,
          confirmEmail,
        },
        items: cart,
        total: total,
        status: "Generada",
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "orders");

      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Su orden de compra está siendo generada, aguarde unos momentos</h1>;
  }

  if (orderId) {
    return <h2>El ID de su orden de compra es: {orderId} </h2>;
  }

  return (
    <div>
      <div className="Ticket">
        <h3>Detalle de su compra</h3>
        {cart.map((item) => (
          <div key={item.id}>
            <p id="itemName">{item.title}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        ))}
        <h4>Total a pagar: ${total}</h4>
      </div>
      <h3>Checkout</h3>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};


export default Checkout