import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TableItem = ({ el }) => {
  return (
    <Fragment>
      <td> {el.type} </td>
      <td> {el.amount} </td>
      <td> {el.currency} </td>
    </Fragment>
  );
};

TableItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
export default TableItem;
