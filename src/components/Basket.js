import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import whiteSweater from '../images/white-sweater.jpg';
import blackWhiteHoodie from '../images/black-white-hoodie.jpg';
import rainbowCaticorn from '../images/rainbow-caticorn-sweater.jpg';
import blackHoodie from '../images/black-hoodie.jpg';
import blackHoodieZipper from '../images/black-hoodie-zipper.jpg';

function Basket({basketProps}) {
    console.log('basketProps: ', basketProps);

    let productsInBasket = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log('Item: ', item);
        console.log('basketProps.products: ', basketProps.products[item].inBasket);
        if(basketProps.products[item].inBasket) {
            productsInBasket.push(basketProps.products[item])
        }
        console.log('productsInBasket: ', productsInBasket);
    })

    // THE IMAGES SHOW UP IN THIS ORDER BY CLICKING ADD TO BASKET, NO MATTER WHAT PRODUCT IS CLICKED
    // HAS TO BE FIXED! IMAGE HAS TO LINK TO ITS PRODUCT
    const productImages = [whiteSweater, blackWhiteHoodie, rainbowCaticorn, blackHoodie, blackHoodieZipper]


    productsInBasket = productsInBasket.map((product, index) => {
        console.log('My products in my basket: ', product);

        return(
            <Fragment>
                <div className="product-item">
                    <div className="product-title">
                        <h5 className="product">PRODUCT</h5>
                        <span>{product.name}</span>
                    </div>
                    <div className="price">
                        <h5 className="price">PRICE</h5>
                        {product.price},00 EUR
                    </div>
                    <div className="quantity">
                        <h5 className="quantity">QUANTITY</h5>
                        <span>{product.numbers}</span>
                    </div>
                    <div className="total">
                        <h5 className="total">TOTAL</h5>
                        {product.numbers * product.price},00 EUR
                    </div>
                    <div className="product-image">
                        <img src={productImages[index]} alt='productImages'/>
                    </div>
                </div>
            </Fragment>
        )
    });

    return (
        <div className="container-basket">
            <div className="basket-header">
                <h2>My Basket &nbsp;🛒</h2>
            </div>
            <div className="basket-products">
                { productsInBasket }
            </div>
            <div className="basket-price">
                <div className="basket-total">
                    <h2>Total Price:&nbsp;</h2>
                    <h2>{basketProps.basketCost} EUR</h2>
                </div>
                <div className="discount">
                    <div className="discount-percent">
                        <h3>20% off Total Price: {0.8 * basketProps.basketCost} EUR</h3>
                    </div>
                    <form className="discount-percent-form">
                        <div className="discount-percent">
                            <h4>
                                <label className="discount-code" for="discount-code">Enter your 20% disount code here &nbsp;</label>
                                <input className="discount-code-percent" type="text" placeholder="Enter your code" name="discount-code" />
                            </h4>
                        </div>
                        <div className="discount-percent">
                            <input className="submit-percent" type="submit" name="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div className="dicount">
                    <div className="discount-absolut">
                        <h3>10 EUR off Total Price:  {basketProps.basketCost - 10} EUR</h3>
                    </div>
                    <form className="discount-absolut-form">
                        <div className="discount-absolut">
                            <h4>
                                <label className="discount-code" for="discount-code">Enter your 20 EUR disount code here &nbsp;</label>
                                <input className="discount-code-absolut" type="text" placeholder="Enter your code" name="discount-code" />
                            </h4>
                        </div>
                        <div className="discount-absolut">
                            <input className="submit-absolut" type="submit" name="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div className="checkout">
                    <button className="checkout">Checkout and Payment</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Basket);
