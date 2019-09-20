import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from './components/auth/Register';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Navbar></Navbar> */}
          <Route path="/register" component={Registration} />
          {/* <Footer></Footer> */}
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
