
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import {useStateValue} from './StateProvider.js';
import React, {useEffect} from 'react';
import { auth } from './Firebase.js';
import Payment from './Payment.js'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.js';
const promise = loadStripe(
  'pk_test_51OPCYxKQIKktaU2lfHwW8mWXwka9abazzDFtnT7kqnFkaBrEAteQbWK7XFbK2pJvVCatZWt67I3BZJetSukGOtpi00VoZHeexg'
);
function App() {
  const [{ }, dispatch]=useStateValue();
  useEffect(()=>{ 
    auth.onAuthStateChanged((authUser)=>{ 
      if (authUser){ dispatch({ 
        type:'SET_USER',
        user:authUser,
      })
    }else{ 
        dispatch({ 
          type:'SET_USER',
          user:null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
              <Header/>
              <Orders />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
