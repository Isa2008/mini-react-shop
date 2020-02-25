# Mini React Shop

Basic shopping app using React Hooks, Redux, React Router DOM, JavaScript, CSS with Flexbox and HTML.

Shop products are displayed on home page and can be added to basket. At top navigator you'll see the qauntity that is added. On basket page the shopping cart with all added items are listed with their quantities and total price for each. The total price of the shopping cart is being calculated and two potential disount prices, with 20% off price and 10 EUR off price.

What still needs to be done:
Price display needs to be fixed. The images don't show up in the correct affiliation by adding its item to the basket. Improving shopping cart in basket by adding a delete item from basket button and adding buttons for more and less quantity per item. Further on I'd like to implement the checkout and payment.


### Installation and Download

### NODE.js
To start the project you need to have Node.js on your device.
Downloas Node.js from its website: https://nodejs.org/
Install Node.js.

### REACT
The next step is to set up the React app
You can create a new app by typing: \
create-react-app react-shop \
"react-shop" is the name off our app

If you haven't installed create-react-app then type the following \
npm install -g create-react-app

Then you can start running the app on localhost:3000 by typing: \
npm start

***

In folder "src", the file "App.js" is the starting and connecting point for all components.
In folder "src" create a folder called "components" with three files: Navbar.js, Product.js and Basket.js. Navbar.js is the top Navbar with the links to "Shop" with all its products and "Basket" with shopping cart.

***

### REDUX 1
Installing Redux, redux-thunk, redux-devtools-extension package into your project: \
npm install redux react-redux redux-thunk redux-devtools-extension

To be able to see what is going on with your Redux app in the extension, require the composeWithDevTools function, pass to it the the value returned from your call to applyMiddleWare, and pass the value it returns to createStore:

Have a look at the file "store.js" for further information

### REDUX 2
In file "App.js": \
import { Provider } from 'react-redux'; \
import store from './store.js';

All our components should be wrapped inside the Provider within the var store. \
The var store that is imported from "store.js" is passed into the Provider.

### REDUX 3
Creating the Reducer: \
In folder "src" create a new folder called "reducers" \
In folder "reducers" create a new file called "index.js" \
In folder "reducers" create a new file called "basketReducer.js"
In "basketReducer.js" create the initialState for the basket: \
You need to import the created basketReducer in "index.js" in folder "reducers":

### REDUX 4
Creating a new folder inside of "src" called "actions" \
Inside folder "actions" create a file called "types.js" and a file called "addAction.js"

### REDUX 5
In folder "components" in file "Product.js" connect Redux with the components: \
import { connect } from 'react-redux';

Import the function "addBasket": \
import { addBasket } from '../actions/addAction';

To connect everything to each other, export connect with its first parameter as null and set the function "addBasket" to component Product: \
export default connect(null, { addBasket })(Product);

Then call the parameter props in the var Product and let it show up in the console: \

***

### REACT ROUTER DOM
Installing React Router DOM: \
npm i react-router-dom

The React Router DOM gives us the possibility to switch to pages withing the single page app without refreshing the browser.
In App.js we're routing the pathes to the project pages and their url: \
Route exact path="/" component={Product} \
Route path="/basket" component={Basket}
