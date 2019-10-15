import React from 'react';
import Home from './components/home/Home';
import Foot from './components/Foot';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/Terms';
import RoomsRates from './components/RoomsRates'
import About from './components/about/About';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/reservation/Reservation';
import { Switch, Route, } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
        <Switch>
          <Route exact path="/comingsoon" component={ComingSoon} />
          <Route exact path="/" component={Home} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/termsconditions" component={Terms} />
          <Route exact path="/roomsrates" component={RoomsRates} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
    <Foot />
  </>
)

export default App;
