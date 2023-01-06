import styles from "../../styles/ProductsList.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductsList = ({ items }) => {
  return (
      <ul className={styles.list__container}>
        {items.map((item, i) => (
          <li className={styles.list__item} key={i}>
            <div className={styles["list__item-container"]}>
              <Link className={styles["list__item-link"]} href="/">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={`${item.title} image`}
                />
                <p className={styles["list__item-title"]}>{item.title}</p>
                <span className={styles["list__item-price"]}>
                  {item.price}zł
                </span>
              </Link>
              <button className={styles["list__item-btn"]}>
                Dodaj do koszyka
              </button>
            </div>
          </li>
        ))}
      </ul>

  );
};

export default ProductsList;
