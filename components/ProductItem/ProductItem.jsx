import styles from "../../styles/ProductItem.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ item }) => {
  return (
    <div className={styles.item__container}>
      <Link
        className={styles.item__link}
        href={{
          pathname: "/[category]/[id]",
          query: { category: item.category, id: item.id },
        }}
      >
        <Image
          src={item.img}
          width={200}
          height={200}
          alt={`${item.title} image`}
        />
        <p className={styles.item__title}>{item.title}</p>
        <span className={styles.item__price}>{item.price}zł</span>
      </Link>
      <button className={styles.item__btn}>Dodaj do koszyka</button>
    </div>
  );
};

export default ProductItem;
