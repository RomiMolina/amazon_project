import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productNumber: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addProductExists = state.products.find((product)=> product.id === action.payload.id);
            if(addProductExists){
                addProductExists.quantity += parseInt(action.payload.quantity);
            }else{
                state.products.push({...action.payload , quantity: parseInt(action.payload.quantity)});
            }
            state.productNumber = state.productNumber + parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            //find the product removing the array 
            const productToRemove = state.products.find((product)=> product.id === action.payload.id);

            // remove the quantity from product number
            state.productsNumber = state.productsNumber - productToRemove;

            // find index of the product removing
            const index = state.products.findIndex((product)=> product.id === action.payload.id);

            // remove from the array
            state.products.splice(index, 1); 
        },
    }
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
