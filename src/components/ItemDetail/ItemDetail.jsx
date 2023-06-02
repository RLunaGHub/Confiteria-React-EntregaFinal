import "../../App.css";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  title,
  img,
  categoryId,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItemDetail">
      <header className="Header">
        <h2 className="ItemHeader">{title}</h2>
      </header>
      <picture>
        <img src={img} alt={title} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoría: {categoryId}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            {" "}
            Terminar Compra
          </Link>
        ) : (
          <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        )}
        <Link to="/" className="Option">
          Seguir comprando
        </Link>
      </footer>
    </article>
  );
};

export default ItemDetail;
