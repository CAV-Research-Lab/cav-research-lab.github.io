import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Publications from './pages/Publications';
import Innovations from './pages/Innovations';
import Projects from './pages/Projects';
import News from './pages/News';
import Team from './pages/Team';
import Blog from './pages/Blog';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/research' component={Projects} />
          <Route path='/Innovations' component={Innovations} />
          <Route path='/publications' component={Publications} />
          <Route path='/news' component={News} />
          <Route path='/team' component={Team} />
          <Route path='/blog' component={Blog} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
