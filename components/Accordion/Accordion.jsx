import styles from "../../styles/Accordion.module.css";

const Accordion = ({ title, children, activeAccordion, setActiveAccordion }) => {
  return (
    <div className={styles.accordion__container}>
      <div className={styles.heading}>
        <div className={styles.heading__container}>
          <span
            onClick={() => setActiveAccordion(title)}
            className={styles.heading__span}
          >
            {activeAccordion === title ? (
              <i className={`ri-arrow-right-s-fill ${styles.heading__arrow}`}></i>
            ) : (
              <i className={`ri-arrow-down-s-fill ${styles.heading__arrow}`}></i>
            )}
          </span>
          <p className={styles.heading__text}>{title}</p>
        </div>
      </div>
      <div
        className={`${styles.content} ${
          activeAccordion === title ? styles.active : ""
        }`}
      >
        <div className={styles.content__container}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
