import React from "react";
import styles from "../styles/Index.module.css";
import HomeLinks from "../components/HomeLinks/HomeLinks";
import HomeBanner from "../components/HomeBanner/HomeBanner";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeBanner />
      <HomeLinks />
    </div>
  );
};

export default Homepage;
