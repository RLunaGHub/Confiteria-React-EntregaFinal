import "../../App.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="ListGroup">
      {items.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
