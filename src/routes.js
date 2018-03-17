import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Reservations from './components/Reservations';
import Rates from './components/Rates';
import BookingEnginee from './components/BookingEnginee';
import MarketDetailPage from './components/MarketDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/Reservations" component={Reservations} />
    <Route path="/rates" component={Rates} />
    <Route path="/booking-enginee" component={BookingEnginee} />
  </Route>
)