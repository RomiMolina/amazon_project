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

        },
    }
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
