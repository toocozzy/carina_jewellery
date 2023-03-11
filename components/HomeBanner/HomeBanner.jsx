import styles from "../../styles/HomeBanner.module.css";
import Button from "../UI/Button/Button";

const HomeBanner = ({bannerData}) => {
  return (
    <div
      className={styles.homebanner}
      style={{ backgroundImage: `url(${bannerData.img})` }}
    >
      <div className={styles["homebanner__content-container"]}>
        <p className={styles["homebanner__content-text"]}>
          {bannerData.text}
        </p>
        <Button href="/">Sprawdź</Button>
      </div>
    </div>
  );
};

export default HomeBanner;
