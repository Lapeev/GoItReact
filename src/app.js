import React from 'react';
import AppCard from './socialCard/app';
import AppUpload from './uploadStats/app';
import AppPlan from './pricingPlan/app';
import AppTable from './office/app';

const App = () => (
  <div>
    <AppCard />
    <AppUpload />
    <AppPlan />
    <AppTable />
  </div>
);

export default App;
