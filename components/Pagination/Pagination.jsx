import styles from "../../styles/Pagination.module.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className={styles.pagination__container}>
      <button className={styles.pagination__switch} onClick={prevPage}>
        <i
          className={`ri-arrow-drop-left-line ${styles["pagination__switch-icon"]}`}
        ></i>
      </button>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li className={styles.pagination__item} key={number}>
            <button
              className={`${styles.pagination__btn} ${
                currentPage === number ? styles.active : ""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.pagination__switch} onClick={nextPage}>
        <i
          className={`ri-arrow-drop-right-line ${styles["pagination__switch-icon"]}`}
        ></i>
      </button>
    </div>
  );
};

export default Pagination;
