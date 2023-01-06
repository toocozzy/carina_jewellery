import styles from "../../styles/FeaturedProducts.module.css";
import dummy from "../../dummy.json";
import ProductsList from "../ProductsList/ProductsList";

const FeaturedProducts = () => {
  return (
    <section className={styles["featured-products"]}>
      <h1 className={styles["featured-products__heading"]}>
        nasze bestsellery
      </h1>
      <span>Wybrane dla Ciebie</span>
      <ProductsList items={dummy.featuredproducts} />
    </section>
  );
};

export default FeaturedProducts;
