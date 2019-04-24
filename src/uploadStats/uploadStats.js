import React from 'react';
import PropTypes from 'prop-types';
import ShowTitle from './header';
import UploadList from './uploadList';
import styles from './styles.module.scss';

const UploadStats = ({ title, stats }) => {
  return (
    <section className={styles.upload}>
      <ShowTitle title={title} />{' '}
      <ul className={styles.upload__list}>
        <UploadList stats={stats} />{' '}
      </ul>{' '}
    </section>
  );
};

UploadStats.defaultProps = {
  title: '',
};

UploadStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default UploadStats;
