import { createSlice } from "@reduxjs/toolkit";

const categroySlice = createSlice({
    name:'category',
    initialState:{
        category: 'All'
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category = action.payload;
        }
    }
})

export const {setCategory} = categroySlice.actions;
export default categroySlice.reducer;