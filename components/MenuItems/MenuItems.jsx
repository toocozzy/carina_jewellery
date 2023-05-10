import styles from "../../styles/MenuItems.module.css";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";
import { useState, useEffect, useRef } from "react";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={styles.container}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu && items.url ? (
        <>
          <button
            className={`${styles.link} ${styles.btn}`}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <Link className={styles.link} href={`${items.url}`}>
              {items.title}
            </Link>
          </button>
          <Dropdown subcategories={items.submenu} dropdown={dropdown} />
        </>
      ) : items.submenu && !items.url ? (
        <button
          className={`${styles.link} ${styles.btn}`}
          onClick={() => setDropdown((prev) => !prev)}
        >
          {items.title}
        </button>
      ) : (
        <Link className={styles.link} href={`${items.url}`}>
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
