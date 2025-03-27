import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice"
import categorySlice from "./slices/categoryslice"
import searchSlice from "./slices/searchSlice"
const Store = configureStore({
    reducer: {
        cart : cartReducer,
        category: categorySlice,
        search: searchSlice,
    }
});
export default Store;