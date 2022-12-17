import Link from "next/link";
import styles from "../../../styles/Button.module.css";

const Button = ({ href, children }) => {
  return (
    <Link className={styles.button} href={href}>
      {children}
    </Link>
  );
};

export default Button;
