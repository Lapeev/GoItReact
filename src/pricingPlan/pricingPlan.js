import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './pricingItem/pricingItem';
import styles from './styles.module.scss';

const PricingPlan = ({ obj = [] }) => {
  return (
    <ul className={styles.pricingPlan}>
      {' '}
      {obj.map(el => {
        return (
          <li className={styles.item} key={el.icon}>
            <PricingItem el={el} />{' '}
          </li>
        );
      })}{' '}
    </ul>
  );
};

PricingPlan.propTypes = {
  obj: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
