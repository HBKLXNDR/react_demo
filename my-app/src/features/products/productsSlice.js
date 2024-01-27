import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
