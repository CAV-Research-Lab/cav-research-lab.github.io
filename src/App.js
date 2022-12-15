import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Publications from './components/pages/Publications';
import About from './components/pages/About';
import News from './components/pages/News';
import Team from './components/pages/Team';
import Blog from './components/pages/Blog';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
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
