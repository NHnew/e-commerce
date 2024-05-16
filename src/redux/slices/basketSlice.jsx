import { createSlice } from '@reduxjs/toolkit';

const getBasketFormStorge = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'));
    }
    return [];
};


const initialState = {
    products: getBasketFormStorge()
};


const writeFromBasketStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
};


export const basketSilce = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find(product => product.id === action.payload.id);
            if (findProduct) {
                const extractedProducts = state.products.filter(product => product.id != action.payload);
                findProduct.priceCount += action.payload.priceCount;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketStorage(state.products);
            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketStorage(state.products);
            }
        }
    }
});


export const { addToBasket } = basketSilce.actions;

export default basketSilce.reducer;
