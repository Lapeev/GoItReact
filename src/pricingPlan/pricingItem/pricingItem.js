import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PricingItem = ({ el }) => {
  return (
    <div className={styles.pricingItem}>
      <i
        className={styles.icon}
        style={{
          backgroundImage: `url(${el.icon})`,
        }}
      >
        {' '}
      </i>{' '}
      <h2 className={styles.label}> {el.label} </h2>{' '}
      <p className={styles.capacity}> {el.capacity} storage </p>{' '}
      <p className={styles.description}> {el.description} </p>{' '}
      <p className={styles.price}>
        $ {el.price}
        /mo{' '}
      </p>{' '}
      <button type="button" className={styles.button}>
        {' '}
        Get Started{' '}
      </button>{' '}
    </div>
  );
};

PricingItem.propTypes = {
  el: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
