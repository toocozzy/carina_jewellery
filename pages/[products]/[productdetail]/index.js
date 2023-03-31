import path from "path";
import fs from "fs/promises";
import React, { useState } from "react";
import Accordion from "../../../components/Accordion/Accordion";
import ProductImagesSlider from "../../../components/ProductImagesSlider/ProductImagesSlider";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../../../styles/ProductDetailPage.module.css";
import dynamic from "next/dynamic";

const RelatedProductsSlider = dynamic(
  () =>
    import("../../../components/RelatedProductsSlider/RelatedProductsSlider"),
  {
    ssr: false,
  }
);

const ProductDetailPage = ({ loadedProduct, relatedProducts }) => {
  const [activeAccordion, setActiveAccordion] = useState("specyfikacja");

  return (
    <div className={styles.container}>
      <section className={styles["product-detail-section"]}>
        <div className={styles.slider__container}>
          <ProductImagesSlider images={loadedProduct.images} />
        </div>
        <div className={styles["product-info__container"]}>
          <h1 className={styles.product__title}>{loadedProduct.title}</h1>
          <p className={styles.product__price}>
            cena:{" "}
            <span className={styles["product__price-span"]}>
              {loadedProduct.price}
            </span>{" "}
            zł
          </p>
          <p
            className={styles.product__id}
          >{`kod produktu: ${loadedProduct.id}`}</p>
          <p className={styles.product__description}>
            {loadedProduct.description}
          </p>
          <div className={styles["product__size-container"]}>
            <label
              className={styles["product__size-label"]}
              htmlFor="size-select"
            >
              Obwód nadgarstka:
            </label>
            <select
              className={styles["product__size-select"]}
              name="size"
              id="size-select"
            >
              {loadedProduct.sizes?.map((size, i) => (
                <option key={i} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button className={styles.addtocartbtn}>Dodaj do koszyka</button>
          <button className={styles.addtofavoritesbtn}>
            <i
              className={`ri-heart-fill ${styles.addtofavoritesbtn__icon}`}
            ></i>
            Dodaj do ulubionych
          </button>
          <Accordion
            title="specyfikacja"
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
          >
            <table className={styles["product-specification"]}>
              <tbody>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    nazwa kamienia:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.name_of_rock}
                  </td>
                </tr>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    rozmiar kamienia:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.size_of_rock}
                  </td>
                </tr>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    materiał zapięcia:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.material_of_closure}
                  </td>
                </tr>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    typ zapięcia:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.type_of_closure}
                  </td>
                </tr>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    materiał zawieszki:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.material_of_hanger}
                  </td>
                </tr>
                <tr className={styles["product-specification__item"]}>
                  <td className={styles["product-specification__name"]}>
                    motyw zawieszki:
                  </td>
                  <td className={styles["product-specification__value"]}>
                    {loadedProduct.theme_of_hanger}
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion>
          <Accordion
            title="dostawa"
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              consectetur consequuntur cum debitis dicta doloremque earum magni
              nesciunt, nostrum obcaecati perferendis provident quaerat saepe
              sit soluta temporibus unde veniam voluptates!
            </p>
          </Accordion>
          <Accordion
            title="informacje o rozmiarze"
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              atque impedit labore modi necessitatibus sit vel voluptates. Alias
              aut, dolorum ipsa laudantium magnam omnis quasi quia quos totam
              voluptatum! Error.
            </p>
          </Accordion>
        </div>
      </section>
      <section className={styles["related-products-section"]}>
        <h2>Produkty w podobnym stylu</h2>
        <div className={styles["products-slider-container"]}>
          <RelatedProductsSlider relatedProducts={relatedProducts} />
        </div>
      </section>
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

  const data = await getData();

  const productDetails = data.products.find(
    (product) => product.id === params.productdetail
  );

  const relatedProducts = data.products.filter((elem) =>
    productDetails.relatedProductsIds?.includes(elem.id)
  );

  return {
    props: {
      loadedProduct: productDetails,
      relatedProducts,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const paths = data.products.map((product) => {
    return {
      params: {
        products: product.category.toString(),
        productdetail: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailPage;
