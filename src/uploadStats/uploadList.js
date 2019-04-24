import React from 'react';
import styles from './styles.module.scss';
import getRandomColor from './colorGenerator';

const UploadList = ({ stats = [] }) => {
  return stats.map(el => (
    <li
      className={styles.upload__listItem}
      key={el.id}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span> {el.label} </span> <span> {el.percentage} </span>{' '}
    </li>
  ));
};

export default UploadList;
