import Badge from "react-bootstrap/Badge";
import cart from "./assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const styles = {
  img: {
    height: 35,
  },
  span: {
    paddingLeft: 6,
  },
};

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Badge bg="light">
      <Link
        to="/cart"
        className="CartWidget"
        style={{ display: totalQuantity > 0 ? 'block' : 'none' }}
      >
        <img
          src={cart}
          alt="Imagen de carrito de compras"
          style={styles.img}
        />
        <span style={styles.span}></span> 
        {totalQuantity}
      </Link>
    </Badge>
  );
};
