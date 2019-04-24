import React from 'react';
import obj from './transactions.json';
import Table from './transactionsWrapper';
import styles from './stylesWrapper.module.scss';

const AppTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <Table obj={obj} />
    </div>
  );
};

export default AppTable;
