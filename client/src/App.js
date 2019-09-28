import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from './components/auth/Register';
import Login from './components/auth/Login';
import LandingPage from './components/layout/Landing';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Navbar></Navbar> */}
          <Route path="/landing" component={LandingPage} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          {/* <Footer></Footer> */}
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
