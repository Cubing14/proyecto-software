// StarRating.js
import React from 'react';
import styles from '../app/page.module.css';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < rating ? styles.filled : ''}`}>&#9733;</span>
  ));

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
