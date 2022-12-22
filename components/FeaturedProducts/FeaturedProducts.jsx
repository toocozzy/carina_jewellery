import styles from "../../styles/FeaturedProducts.module.css";
import dummy from "../../dummy.json";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <section className={styles["featured-products"]}>
      <h1 className={styles["featured-products__heading"]}>
        nasze bestsellery
      </h1>
      <span>Wybrane dla Ciebie</span>
      <ul className={styles.list__container}>
        {dummy.featuredproducts.map((item, i) => (
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
    </section>
  );
};

export default FeaturedProducts;
