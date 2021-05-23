import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Logout from './components/Logout';
import Forms from './components/Form';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path= "/logout" component={Logout} />
      <Route path="/login" exact component={Login} />
      <Route path= "/form" component={Forms} />
      
    </Switch>
    </Router>
    </div>
  );
}

export default App;