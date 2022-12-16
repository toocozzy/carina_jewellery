import styles from "../../styles/HomeBanner.module.css";
import dummy from "../../dummy.json";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div
      className={styles.homebanner}
      style={{ backgroundImage: `url(${dummy.banner.img})` }}
    >
      <div className={styles["homebanner__content-container"]}>
        <p className={styles["homebanner__content-text"]}>
          {dummy.banner.text}
        </p>
        <Link className={styles["homebanner__content-link"]} href="/">
          Sprawdź
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
