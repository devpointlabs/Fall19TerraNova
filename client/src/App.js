import React from 'react';
import Home from './components/home/Home';
import Foot from './components/Foot';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/Terms';
import RoomsRates from './components/RoomsRates'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/reservation/Reservation';
import { Switch, Route, } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
// import { StateProvider } from './providers/StateProvider';

const App = () => (
  <>
    <FetchUser>
        <Switch>
          <Route exact path="/" component={ComingSoon} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
    <Foot />
  </>
)

export default App;
