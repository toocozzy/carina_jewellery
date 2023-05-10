import Logo from "../Logo/Logo";
import styles from "../../styles/Navbar.module.css";
import dummy from "../../dummy.json";
import MenuItems from "../MenuItems/MenuItems";

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
          {dummy.menuCategories.map((category, i) => (
            <MenuItems items={category} key={i} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
