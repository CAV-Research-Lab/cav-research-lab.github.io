import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Blog, Home, Impact, Innovations, News, Projects, Team } from './pages';
import { initializeAnalytics, trackPageView } from './utils/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/research' component={Projects} />
          <Route path='/Innovations' component={Innovations} />
          <Route path='/impact' component={Impact} />
          <Route path='/publications' component={Impact} />
          <Route path='/news' component={News} />
          <Route path='/team' component={Team} />
          <Route path='/blog' component={Blog} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
