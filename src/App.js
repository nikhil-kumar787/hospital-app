import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Logout from './components/Logout';
import Forms from './components/Form';
import Appointment from './components/Appointment';

// import PreLoader1 from './components/PreLoader1';
import LoginPage from './views/LoginPage/LoginPage';
import LandingPage from './views/LandingPage/LandingPage';
import Doctor from './views/Doctorpage/Doctor';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      {/* <PreLoader2 /> */}
      {/* <PreLoader1 /> */}
      
      <Router>
      
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path= "/logout" component={Logout} />
      <Route path= "/appointment" component={Appointment} />
      <Route path="/login" component={Login} />
      <Route path= "/form" component={Forms} />
      <Route path= "/landingpage" component={LandingPage} />
      <Route path= "/doctor" component={Doctor} />
      <Route path= "/loginpage" component={LoginPage} />


      
    </Switch>
    </Router>
    {/* </header> */}
    </div>
  );
}

export default App;