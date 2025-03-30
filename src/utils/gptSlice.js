import { createSlice } from "@reduxjs/toolkit";

const getSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state,axtion)=>{
                state.showGptSearch = !state.showGptSearch;
        }
    },
})
export default getSlice.reducers;

export const {toggleGptSearchView}=getSlice.actions;