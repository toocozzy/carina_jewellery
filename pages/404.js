import Link from "next/link";
import styles from "../styles/404.module.css"
import Button from "../components/UI/Button/Button";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>Nie znaleziono strony :(</h1>
      <Button href="/">Wróć do strony głównej</Button>
    </div>
  );
};

export default NotFoundPage;
