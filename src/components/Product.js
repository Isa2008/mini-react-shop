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
                <h2>Our best sweaters for you</h2>
            </div>
            <div className="container-items">
                <div className="item">
                    <img src={whiteSweater} alt="whiteSweater" />
                    <h2 className="item-title">White Sweater</h2>
                    <h5 className="item-description">Basic white sweater</h5>
                    <h3 className="item-price">44 EUR</h3>
                    <a onClick={() => props.addBasket('whiteSweater')} className="addToBasket" href="#">Add to basket</a>
                </div>
                <div className="item">
                    <img src={blackWhiteHoodie} alt="blackWhiteHoodie" />
                    <h2 className="item-title">Black/White Sweater</h2>
                    <h5 className="item-description">Black and white sweater</h5>
                    <h3 className="item-price">99 EUR</h3>
                    <a onClick={() => props.addBasket('blackWhiteHoodie')} className="addToBasket" href="#">Add to basket</a>
                </div>
                <div className="item">
                    <img src={raimbowCaticorn} alt="sweaterRainbowCaticorn" />
                    <h2 className="item-title">Rainbow Caticorn</h2>
                    <h5 className="item-description">Sweater with rainbow caticorn print</h5>
                    <h3 className="item-price">77 EUR</h3>
                    <a onClick={() => props.addBasket('raimbowCaticorn')} className="addToBasket" href="#">Add to basket</a>
                </div>
                <div className="item">
                    <img src={blackHoodie} alt="blackHoodie" />
                    <h2 className="item-title">Black Hoodie</h2>
                    <h5 className="item-description">Black hoodie with print</h5>
                    <h3 className="item-price">66 EUR</h3>
                    <a onClick={() => props.addBasket('blackHoodie')} className="addToBasket" href="#">Add to basket</a>
                </div>
                <div className="item">
                    <img src={blackHoodieZipper} alt="blackHoodie" />
                    <h2 className="item-title">Black Zip Hoodie</h2>
                    <h5 className="item-description">Black hoodie with zipper</h5>
                    <h3 className="item-price">55 EUR</h3>
                    <a onClick={() => props.addBasket('blackHoodieZipper')} className="addToBasket" href="#">Add to basket</a>
                </div>
            </div>
        </div>
    );  
}

export default connect(null, { addBasket })(Product);