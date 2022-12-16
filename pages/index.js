import React from "react";
import styles from "../styles/Index.module.css";
import dummy from "../dummy.json";
import Link from "next/link";
import HomeBanner from "../components/HomeBanner/HomeBanner";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeBanner />
      <ul className={styles["homepage__links-container"]}>
        {dummy.homelinks.map((item) => (
          <Link
            className={styles["homepage__links-item"]}
            key={item.id}
            href="/"
          >
            <div
              className={styles["homepage__links-img"]}
              style={{ backgroundImage: `url(${item.path})` }}
            >
              <div>
                <p>{item.id}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
