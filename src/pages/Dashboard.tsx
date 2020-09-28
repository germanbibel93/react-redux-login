/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  // const user = useSelector(state => state.user);
  return (
    <>
        <div className="card-container">
          <h1>Dashboard</h1>
        </div>
    </>
  );
};

export default Dashboard;
