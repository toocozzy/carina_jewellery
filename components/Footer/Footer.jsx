import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links__container}>
        <Link className={styles.links__item} href="/">
          polityka i prywatność
        </Link>
        <Link className={styles.links__item} href="/">
          dostawa i płatność
        </Link>
        <Link className={styles.links__item} href="/">
          regulamin
        </Link>
      </div>
      <Image src="/assets/logo_white.png" width={180} height={80} alt="logo" />
      <div className={styles.contact__container}>
        <div className={styles["contact__container-social"]}>
          <p className={styles["contact__label"]}>Sprawdź nasze social media</p>
          <Link className={styles.link} href="/">
            <i className={`${styles.links__icon} ri-facebook-circle-fill`}></i>
          </Link>
          <Link className={styles.link} href="/">
            <i className={`${styles.links__icon} ri-instagram-line`}></i>
          </Link>
        </div>
        <div className={styles["contact__container-email"]}>
          <p className={styles["contact__label"]}>Napisz do nas</p>
          <Link className={`${styles.link} ${styles.contact__link}`} href="/">
            kontakt@carinajewellery.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
