import React from 'react';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/Terms';
import RoomsRates from './components/RoomsRates'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/Reservation';
import { Switch, Route, } from 'react-router-dom';
// import { StateProvider } from './providers/StateProvider';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/termsconditions" component={Terms} />
          <Route exact path="/roomsrates" component={RoomsRates} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;
