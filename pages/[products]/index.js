import { useRouter } from "next/router";
import styles from "../../styles/ProductsPage.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import dummy from "../../dummy.json"

const ProductsPage = () => {
  const router = useRouter();
  const query = router.query.products;

  return (
    <div className={styles.container}>
      {/*<h1>{query}</h1>*/}
      <ProductsList items={dummy.bransoletki}/>
    </div>
  );
};

export default ProductsPage;
