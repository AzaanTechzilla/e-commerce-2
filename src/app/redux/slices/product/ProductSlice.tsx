
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product{
    product:any
}
const initialState: Product = {
product:[],
}
const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        product:(state, action:PayloadAction<any>)=>{
            state.product = action.payload
        }
    }
});
export const {product} = ProductSlice.actions;
export default ProductSlice.reducer;