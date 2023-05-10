import Link from "next/link";
import styles from "../../styles/Dropdown.module.css";
import MenuItems from "../MenuItems/MenuItems";

const Dropdown = ({ subcategories, dropdown }) => {
  return (
    <ul className={`${styles.dropdown__container} ${dropdown ? styles["dropdown-show"] : ""}`}>
      {subcategories.map((category, i) => (
        <li className={styles.dropdown__item} key={i}>
          <Link className={styles["dropdown__item-link"]} href={category.url}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Dropdown;
