import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    basketCost: 0,
    products: {
        whiteSweater: {
            name: 'White Sweater',
            price: 44,
            numbers: 0,
            inBasket: false
        },
        blackWhiteHoodie: {
            name: 'Black/White sweater',
            price: 99,
            numbers: 0,
            inBasket: false
        },
        raimbowCaticorn: {
            name: 'Rainbow Caticorn',
            price: 77,
            numbers: 0,
            inBasket: false
        },
        blackHoodie: {
            name: 'Black Hoodie',
            price: 66,
            numbers: 0,
            inBasket: false
        },
        blackHoodieZipper: {
            name: 'Black Zip Hoodie',
            price: 55,
            numbers: 0,
            inBasket: false
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload]}
            // console.log(addQuantity);
            addQuantity.numbers += 1;
            addQuantity.inBasket = true;
            console.log(addQuantity);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                basketCost: state.basketCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}

