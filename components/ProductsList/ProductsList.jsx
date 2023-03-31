import styles from "../../styles/ProductsList.module.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = ({ items }) => {
  return (
    <ul className={styles.list__container}>
      {items.map((item, i) => (
        <li className={styles.list__item} key={i}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
