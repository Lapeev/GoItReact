import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './transactions';
import styles from './styles.module.scss';

const TableWrapper = ({ obj = [] }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th> Type </th>
          <th> Amount </th>
          <th> Currency </th>
        </tr>
      </thead>
      <tbody>
        {obj.map(el => {
          return (
            <tr key={el.id}>
              <TableItem el={el} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TableWrapper.propTypes = {
  obj: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TableWrapper;
