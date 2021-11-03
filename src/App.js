import React from 'react';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
