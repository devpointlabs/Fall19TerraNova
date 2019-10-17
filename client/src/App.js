import React, { useEffect } from 'react';
import Home from './components/home/Home';
import Foot from './components/Foot';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/Terms';
import RoomsRates from './components/RoomsRates';
import RoomDetails from './components/RoomDetails';
import About from './components/about/About';
import Contact from './components/Contact';
import FetchUser from './components/FetchUser';
// import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/reservation/Reservation';
import { Switch, Route, } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import About from './components/about/About';
import { StripeProvider, Elements } from 'react-stripe-elements';
// import axios from 'axios'
import CheckoutForm from './components/CheckoutForm'
// import { StateProvider } from './providers/StateProvider';

const App = () => {
  
  // const pubkey = null
  // apiKey={`${pubkey}`}>
  // useEffect(() => {axios.get('api/pubkey').then(res=> {pubkey = res.data}).catch(err => {console.log(err)})}, [])

  return (
    <>
      <Navbar />
      <StripeProvider apiKey='pk_test_K4KS4eaxZnZBLpbElbfccWNx00evq50l7g'>
        <FetchUser>
          <Switch>
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/" component={Home} />
            <Route exact path="/reservation" component={Reservation} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/termsconditions" component={Terms} />
            <Route exact path="/roomsrates" component={RoomsRates} />
            <Route exact path="/roomdetails" component={RoomDetails} />
            <Route exact path="/about" component={About} />
            <Elements>
              <Route exact path="/stripe" component={CheckoutForm} />
            </Elements>
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </StripeProvider >
      <Foot />
    </>
  )
}

export default App;

// apiKey={ENV['STRIPE_PUBLISHABLE_KEY']}
