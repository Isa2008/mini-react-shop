A basic shop app using React Hooks, Redux and React Router DOM



Downloas Node.js -> https://nodejs.org/
And install it

The first step is to set up the React app
# You can create a new app by typing:
create-react-app react-shop 
# "react-shop" is the name off our app

# if you haven't installed create-react-app then type the following
npm install -g create-react-app

# Then you can start running the app on localhost:3000 by typing:
npm start
or yarn start




*** REDUX 1)
Installing Redux
# The easiest and least invasive way to get Redux DevTools working is to use the Chrome extension, which can be installed from the Chrome Web Store. In addition to the extension itself, you should install the redux-devtools-extension package into your project:
npm install redux react-redux redux-thunk redux-devtools-extension

# To be able to see what is going on with your Redux app in the extension, require the composeWithDevTools function, pass to it the the value returned from your call to applyMiddleWare, and pass the value it returns to createStore:

# In folder "src" you have to create a new file called "store.js" with following setup:
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
# createStore and applyMiddleware from Redux
# composeWithDevTools: to get (Chrome) Redux Dev Tools extension
# thunk: to be able to click on our actions, they will be performed asynchronously
# rootReducer: we will create it in the next step

const initialState = {};
# the initalState is completely empty
const middleware = [thunk];
# will help us with all the asynchronous actions
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

# Have a look at "store.js" for further information

# The extension's button in Chrome's toolbar should now light up when you view your site or any site configured to work with the extension. Click the button to launch the UI and start time travelling.

*** REDUX 2)
In file "App.js":

import { Provider } from 'react-redux';
import store from './store.js';

# all the components should be wrapped inside the Provider like so:
function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Navbar />
            <Product />
          </div>
    </Provider>
  );
}

# the var store that is imported from "store.js" is passed into the Provider

*** REDUX 3)
Creating the Reducer:
# In folder "src" create a new folder called "reducers"
# In folder "reducers" create a new file called "index.js"

# In "index.js" import combineReducers:
import { combineReducers } from 'redux';

# and export combineReducers:
export default combineReducers({

});

# In folder "reducers" create a new file called "basketReducer.js"

# In "basketReducer.js" create the initialState for the basket:
const initialState = {
    basketNumbers: 0
}

export default (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

# you need to import the created basketReducer in "index.js" in folder "reducers":
import basketReducer from './basketReducer';

*** REDUX 4)
# Creating a new folder inside of "src" called "actions"
# Inside folder "actions" create a file called "types.js" and a file called "addAction.js"

# In file "types.js":
export const ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET';

# In file "addAction.js":
import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = () => {
    return (dispatch) => {
        console.log('Adding to basket');
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    }
}

*** REDUX 5)
# In folder "components" in file "Product.js" connect Redux with the components:
import { connect } from 'react-redux';

# and import the function "addBasket":
import { addBasket } from '../actions/addAction';

# to connect everything to each other, export connect with first parameter as null and set the function "addBasket" to component Product:
export default connect(null, { addBasket })(Product);

# Then call the parameter props in the var Product and let it show up in the console:
const Product = (props) => {
    console.log(props);


******

# Installing React Router DOM:
npm i react-router-dom






# ES7 Extensions for React and Redux
# rfce ist die Abkürzung um schnell eine neue Komponente zu kreieren