import styles from "../styles/404.module.css"
import Button from "../components/UI/Button/Button";

const dupaPage = () => {
  return (
    <div className={styles.container}>
      <h1>Nie znaleziono strony :(</h1>
      <Button href="/">Strona główna</Button>
    </div>
  );

};

export default dupaPage;
