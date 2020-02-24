import React, { useState } from 'react';

// display/import product's images
import whiteSweater from '../images/white-sweater.jpg';
import blackWhiteHoodie from '../images/black-white-hoodie.jpg';
import raimbowCaticorn from '../images/rainbow-caticorn-sweater.jpg';
import blackHoodie from '../images/black-hoodie.jpg';
import blackHoodieZipper from '../images/black-hoodie-zipper.jpg';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { addBasket } from '../actions/addAction';

const Product = (props) => {
    console.log('Product props addBasket: ', props);
    // To make the Object with the function addBasket visible in the console!

    // const [basketNumbers, setBasketNumbers] = useState(0);

    // const addToBasket = () => {
    //     console.log('Button clicked');
    //     setBasketNumbers(basketNumbers + 1);
    // }

    return(
        <div className="container">
            <div className="product-header">
                <h2>Our best choices for you</h2>
            </div>
            <div className="item">
                <h2>White Sweater</h2>
                <img src={whiteSweater} alt="Image of white sweater" />
                <h5>Basic white sweater</h5>
                <h3>44 EUR</h3>
                <a onClick={() => props.addBasket('whiteSweater')} className="addToBasket" href="#">Add to basket</a>
            </div>
            <div className="item">
                <h2>Black/White Sweater</h2>
                <img src={blackWhiteHoodie} alt="Image of black and white hoodie" />
                <h5>Black and white sweater</h5>
                <h3>99 EUR</h3>
                <a onClick={() => props.addBasket('blackWhiteHoodie')} className="addToBasket" href="#">Add to basket</a>
            </div>
            <div className="item">
                <h2>Rainbow Caticorn</h2>
                <img src={raimbowCaticorn} alt="Image of sweater with rainbow caticorn print" />
                <h5>Sweater with rainbow caticorn print</h5>
                <h3>77 EUR</h3>
                <a onClick={() => props.addBasket('raimbowCaticorn')} className="addToBasket" href="#">Add to basket</a>
            </div>
            <div className="item">
                <h2>Black Hoodie</h2>
                <img src={blackHoodie} alt="Image of black hoodie" />
                <h5>Black hoodie with a print</h5>
                <h3>66 EUR</h3>
                <a onClick={() => props.addBasket('blackHoodie')} className="addToBasket" href="#">Add to basket</a>
            </div>
            <div className="item">
                <h2>Black Zip Hoodie</h2>
                <img src={blackHoodieZipper} alt="imageBlackHoodie" />
                <h5>Black hoodie with zipper and a print</h5>
                <h3>55 EUR</h3>
                <a onClick={() => props.addBasket('blackHoodieZipper')} className="addToBasket" href="#">Add to basket</a>
            </div>
        </div>
    );  
}

export default connect(null, { addBasket })(Product);