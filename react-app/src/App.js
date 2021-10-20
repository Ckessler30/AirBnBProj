import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { fetchAllSpots } from './store/allSpots'
import { fetchSpot, updateSpot } from './store/currentSpot'
import { fetchProfile, updateProfile } from './store/currProfile'
import {fetchBookings, deleteBooking, addBooking} from './store/bookings'
import {fetchAllLocations} from './store/locations'
import SplashPage from './components/SplashPage/SplashPage';
import SpotsPage from './components/SpotsPage/SpotsPage';
import SingleSpot from './components/SingleSpotPage/SingleSpot';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const newBooking = {
    spotId: 3,
    userId: 3,
    startDate: "2022-01-10",
    endDate: "2022-01-15",
    numGuests: 6
  }

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(fetchAllSpots())
      // await dispatch(fetchSpot(3))
      await dispatch(fetchProfile(3))
      await dispatch(fetchBookings())
      await dispatch(fetchAllLocations())
      setLoaded(true);
    })();
  }, [dispatch]);


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <SplashPage />
        </ProtectedRoute>
        <Route path="/spots/:location" exact={true}>
          <SpotsPage />
        </Route>
        <Route path="/rooms/:spotId" exact={true}>
          <SingleSpot />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
