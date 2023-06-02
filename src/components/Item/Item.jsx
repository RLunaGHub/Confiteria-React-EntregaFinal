import { Link } from "react-router-dom";

const Item = ({ id, title, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="IteamHeader" id="cardTitle">
          {" "}
          {title}
        </h2>
      </header>

      <picture>
        <img src={img} alt={title} className="ItemImage" />
      </picture>

      <section>
        <p className="Info"> Precio ${price}</p>
        <p className="Info"> Stock Disponible {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
