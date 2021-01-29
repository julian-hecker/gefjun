import propTypes from "prop-types";
import React from "react";

import styles from "./CategoryCard.module.scss";

CategoryCard.propTypes = {
  imageUrl: propTypes.string,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default function CategoryCard(props) {
  return (
    <div className={styles.categoryCard}>
      <img
        className={styles.productImage}
        src={props.imageUrl}
        alt="Product"
      />
      <section className={styles.textContainer}>
        <h1 className={styles.textTitle}>{props.title}</h1>
        <h3 className={styles.textDescription}>{props.description}</h3>
      </section>
    </div>
  );
}
