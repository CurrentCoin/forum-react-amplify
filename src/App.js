import React from 'react';
import SplashPage from './SplashPage';
import Blogger from './Blogger';
import { Route, Link, NavLink, HashRouter as Router } from 'react-router-dom'
import Header from './Header';
import './App.css';

const App = () => {
  return (
	  <div>
	  <Router>
            <div className="content">
              <Header/>
              <Route exact path="/" component={SplashPage}/>
              <Route path="/blog/:topic" component={Blogger}/>
	    </div>
	  </Router>
  </div>	
  );
}

export default App;
