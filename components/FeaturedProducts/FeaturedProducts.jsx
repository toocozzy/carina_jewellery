import styles from "../../styles/FeaturedProducts.module.css";
import ProductsList from "../ProductsList/ProductsList";

const FeaturedProducts = ({ productsData }) => {
  return (
    <section className={styles["featured-products"]}>
      <h1 className={styles["featured-products__heading"]}>
        nasze bestsellery
      </h1>
      <span>Wybrane dla Ciebie</span>
      <ProductsList items={productsData} />
    </section>
  );
};

export default FeaturedProducts;
