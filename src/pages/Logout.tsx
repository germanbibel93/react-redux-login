/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/actions';
import history from '../utils/history';
import { LoginLayout } from '../components/Login';

interface Props {}

const Logout: React.FC<Props> = () => {
  const dispatch = useDispatch();
  dispatch(logoutSuccess());
  history.push(`/`);
  return (
    <LoginLayout>
      <div className="znv-card-container">
        <h1>asdsadasd</h1>
      </div>
    </LoginLayout>
  );
};

export default Logout;
