import React from 'react';
import styles from './styles.module.scss';

const ShowTitle = ({ title }) => {
  if (title) {
    return <h2 className={styles.upload__header}> {title} </h2>;
  }
  return '';
};

export default ShowTitle;
