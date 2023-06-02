import "../../App.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams, useLocation } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [items, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const location = useLocation();

  const isRoot = location.pathname === "/";

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "items"), where("categoryId", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div>Aguarde por favor</div>;
  }

  return (
    <div>
      {isRoot ? (
        <>
          <h1 className="greeting">{greeting}</h1>
        </>
      ) : null}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
