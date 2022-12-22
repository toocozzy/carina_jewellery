import React from "react";
import styles from "../styles/Index.module.css";
import HomeLinks from "../components/HomeLinks/HomeLinks";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeBanner />
      <HomeLinks />
      <FeaturedProducts/>
    </div>
  );
};

export default Homepage;
