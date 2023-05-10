import styles from "../../styles/ProductsPage.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import path from "path";
import fs from "fs/promises";

const ProductsPage = ({ items }) => {
  return (
    <div className={styles.container}>
      <ProductsList items={items} />
    </div>
  );
};

async function getData() {
  const FilePath = path.join(process.cwd(), "dummy.json");
  const jsonData = await fs.readFile(FilePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productsCategory = params.products;
  const isSubCategory = productsCategory.includes("-");
  const data = await getData();

  const products = data.products.filter(
    (product) =>
      (isSubCategory ? product.subcategory : product.category) ===
      productsCategory
  );

  console.log(products);

  return {
    props: {
      items: products,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const categories = data.products.map(
    (product) => product.subcategory || product.category
  );

  const params = categories.map((category) => ({
    params: { products: category },
  }));

  return {
    paths: params,
    fallback: false,
  };
}

export default ProductsPage;
