# Mini React Shop

Starting point of a basic shopping app.

#### TECH STACK:
React Hooks, Redux, React Router DOM, JavaScript, CSS with Flexbox and HTML.

#### DEMO:
https://minireactshop.herokuapp.com/

#### DESCRIPTION:
Shop products are displayed on home page and can be added to basket. At top navigator you'll see the qauntity that is added to basket. On basket page the shopping cart with added items are listed with their quantities and total price for each. The total price of all items inside the shopping cart is being calculated. Further on there are two potential disount prices, one with 20% disount and another with a 10 EUR discount on the total price.

#### FUTURE FEATURES:
Price display needs to be fixed.\
The images don't show up in the correct affiliation by adding its item to the basket.\
Improving shopping cart in basket by adding a delete item from basket button and adding buttons for more and less quantity per item.\
Further on I'd like to implement the checkout and payment and a client registration.

***

### INSTALLATION

#### NODE.js
To start the project you need to have Node.js on your device.
Downloas Node.js from its website: https://nodejs.org/
Install Node.js.


#### REACT
The next step is to set up the React app
You can create a new app by typing: \
create-react-app react-shop \
"react-shop" is the name off our app

If you haven't installed create-react-app then type the following \
npm install -g create-react-app

Then you can start running the app on localhost:3000 by typing: \
npm start


#### START 
The file "App.js" inside folder "src" is the starting and connecting point for all components and our app.
In folder "src" create a folder called "components" with three files:\
Navbar.js, Product.js and Basket.js.\
Navbar.js is our top Navbar. Navbar has the links to our Shop with our shop products, and to Basket with a shopping cart listing all items that are added to basket.


#### REDUX 
Installing Redux, redux-thunk, redux-devtools-extension package into your project: \
npm install redux react-redux redux-thunk redux-devtools-extension


#### REACT ROUTER DOM
Installing React Router DOM: \
npm i react-router-dom

The React Router DOM gives us the possibility to switch within pages in our single page app without refreshing the browser.
In App.js we're routing the pathes to the project pages and their urls.
