import styles from "../../styles/HomeLinks.module.css";
import Button from "../UI/Button/Button";

const HomeLinks = ({ linksData }) => {
  return (
    <section className={styles.homelinks}>
      <ul className={styles.homelinks__container}>
        {linksData.map((item, i) => (
          <li className={styles["homelinks__item-container"]} key={i}>
            <div
              className={styles.homelinks__item}
              style={{ backgroundImage: `url(${item.path})` }}
            >
              <div className={styles["homelinks__text-container"]}>
                <p className={styles.homelinks__text}>{item.id}</p>
              </div>
              <Button href={item.id}>Sprawdź</Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HomeLinks;
