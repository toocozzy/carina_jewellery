import dummy from "../../dummy.json";
import styles from "../../styles/HomeLinks.module.css";
import Button from "../UI/Button/Button";

const HomeLinks = () => {
  return (
    <ul className={styles.homelinks}>
      {dummy.homelinks.map((item) => (
        <div
          className={styles.homelinks__item}
          style={{ backgroundImage: `url(${item.path})` }}
        >
          <div className={styles["homelinks__text-container"]}>
            <p className={styles.homelinks__text}>{item.id}</p>
          </div>
          <Button href="/">Sprawdź</Button>
        </div>
      ))}
    </ul>
  );
};
export default HomeLinks;
