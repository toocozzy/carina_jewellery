import React from "react";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import styles from "../styles/Index.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeCarousel />
    </div>
  );
};

export default Homepage;
