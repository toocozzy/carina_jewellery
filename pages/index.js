import React from "react";
import styles from "../styles/Index.module.css";
import HomeLinks from "../components/HomeLinks/HomeLinks";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import path from "path";
import fs from "fs/promises";

const Homepage = ({ bannerData, linksData, productsData }) => {
  return (
    <div className={styles.homepage}>
      <HomeBanner bannerData={bannerData} />
      <HomeLinks linksData={linksData} />
      <FeaturedProducts productsData={productsData} />
    </div>
  );
};

async function getData() {
  const FilePath = path.join(process.cwd(), "dummy.json");
  const jsonData = await fs.readFile(FilePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps() {
  const data = await getData();

  const featuredProducts = data.products.filter((product) => product.featured === true);

  return {
    props: {
      bannerData: data.banner,
      linksData: data.homelinks,
      productsData: featuredProducts,
    },
    revalidate: 300,
  };
}

export default Homepage;
