import React from 'react';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/Reservation';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";


const App = () => (
  <>
    <Navbar />
    <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;
