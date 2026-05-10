import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Blog, Home, Impact, Innovations, News, Projects, Team } from './pages';


function App() {
  return (
    <>
      <Router>
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
