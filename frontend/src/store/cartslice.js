import { createSlice } from "@reduxjs/toolkit";
const initialState=[];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload);   // state mutation 
        },
        remove(state,action){
           return state.filter((item)=>item._id !==action.payload)  ;  // can't mutate directly thats why we returning a new state
        }
    }

});


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;