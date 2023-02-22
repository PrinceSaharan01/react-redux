import { createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({          // freeze property for object prevent changes made in object items at any point of code and making global object 
    //   makes it accessible throughout the piece of code/application
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading..."
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE     // instead of making an object for using multiple string , we use an idiom(object of strings on the top)
    },
    reducers: {

        setProduct(state, action) {   // don't make async calls inside the reducer ,so no API calls here

            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }

    }
})
export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;



// THUNKS     Middleware   // An Export function returninn another (async)function

export function fetchProducts() {

    return async function fetchThunk(dispatch, getState) {     // getState used to get a property and take action on its behalf 

        dispatch(setStatus(STATUSES.LOADING));

        try {

            const result = await fetch('http://localhost:4000/');
            const data = await result.json();
            //    console.log(data);
            dispatch(setProduct(data));
            dispatch(setStatus(STATUSES.IDLE))

        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));

        }

    }
}


