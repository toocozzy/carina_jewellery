import styles from "../../styles/HomeBanner.module.css";
import dummy from "../../dummy.json";
import Button from "../UI/Button/Button";

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
        <Button href="/">Sprawdź</Button>
      </div>
    </div>
  );
};

export default HomeBanner;
