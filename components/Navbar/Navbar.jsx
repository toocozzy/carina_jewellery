import Logo from "../Logo/Logo";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import dummy from "../../dummy.json";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navbar__btn}>
        <i className="ri-menu-line"></i>
      </button>
      <Logo />
      <button className={styles.navbar__btn}>
        <i className="ri-shopping-bag-line"></i>
      </button>
      <div className={styles.desktop_nav}>
        <ul className={styles["desktop_nav-container"]}>
          {dummy.categories.map((category) => (
            <li className={styles["desktop_nav-item"]} key={category}>
              <Link className={styles["desktop_nav-link"]} href={category}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
