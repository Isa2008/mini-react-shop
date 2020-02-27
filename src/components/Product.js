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
        <div className="container-product">
            <div className="product-header">
                <h2 className="page-title">Our best sweaters for you</h2>
            </div>
            <div className="container-items">
                <div className="item">
                    <img src={whiteSweater} alt="whiteSweater" />
                    <p className="item-title">White Sweater</p>
                    <p className="item-description">Basic white sweater</p>
                    <p className="item-price">44 EUR</p>
                    <button onClick={() => props.addBasket('whiteSweater')} className="addToBasket">Add to basket</button>
                </div>
                <div className="item">
                    <img src={blackWhiteHoodie} alt="blackWhiteHoodie" />
                    <p className="item-title">Black/White Sweater</p>
                    <p className="item-description">Black and white sweater</p>
                    <p className="item-price">99 EUR</p>
                    <button onClick={() => props.addBasket('blackWhiteHoodie')} className="addToBasket">Add to basket </button>
                </div>
                <div className="item">
                    <img src={raimbowCaticorn} alt="sweaterRainbowCaticorn" />
                    <p className="item-title">Rainbow Caticorn</p>
                    <p className="item-description">Sweater with rainbow caticorn print</p>
                    <p className="item-price">77 EUR</p>
                    <button onClick={() => props.addBasket('raimbowCaticorn')} className="addToBasket">Add to basket</button>
                </div>
                <div className="item">
                    <img src={blackHoodie} alt="blackHoodie" />
                    <p className="item-title">Black Hoodie</p>
                    <p className="item-description">Black hoodie with print</p>
                    <p className="item-price">66 EUR</p>
                    <button onClick={() => props.addBasket('blackHoodie')} className="addToBasket">Add to basket</button>
                </div>
                <div className="item">
                    <img src={blackHoodieZipper} alt="blackHoodie" />
                    <p className="item-title">Black Zip Hoodie</p>
                    <p className="item-description">Black hoodie with zipper</p>
                    <p className="item-price">55 EUR</p>
                    <button onClick={() => props.addBasket('blackHoodieZipper')} className="addToBasket">Add to basket</button>
                </div>
            </div>
        </div>
    );  
}

export default connect(null, { addBasket })(Product);