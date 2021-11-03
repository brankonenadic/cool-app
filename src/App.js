import React from 'react';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
