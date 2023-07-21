import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: false
};

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.loading = false
            state.items.push(action.payload);
            state.error = false
        },
        removeCartItem: (state, action) => {
            state.loading = false
            state.items.splice(state.items.indexOf(action.payload),1)
            state.error = false
        },
        incCartItemQuantity: (state, action) => {
            state.items[state.items.findIndex(x => x.id === action.payload)].quantity ++;
        }
    }
});

export const {addCartItem, removeCartItem, incCartItemQuantity} = itemSlice.actions;

export default itemSlice.reducer;