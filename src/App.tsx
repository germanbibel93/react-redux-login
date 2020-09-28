import React from 'react';
import { Route, Switch, BrowserRouter, Router } from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';

import Login from './pages/Login';
import store from './redux/store';
import PrivateRoute from './components/Routes/privateRoute';
import Dashboard from './pages/Dashboard';
import { notFound } from './pages/404';
import Logout from './pages/Logout';
import history from './utils/history';


function App() {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <Router history={history} >
          <Switch >
            <Route exact path={'/'} render={(props) => <Login {...props} />} />
            <PrivateRoute exact path={`/dashboard`} component={(props) => <Dashboard {...props} />}/>
            <PrivateRoute exact path={`/logout`} component={(props) => <Logout {...props} />} />
            <Route path="*" component={notFound} />
          </Switch>
        </Router>
      </StoreProvider>
    </BrowserRouter>
  );

}

export default App;
