import React from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Basket from './components/Basket';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// the var store is passed into the Provider

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/basket" component={Basket} />
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
