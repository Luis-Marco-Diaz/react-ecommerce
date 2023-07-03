import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from './isLoading.slice';
import axios from "axios";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setproducts : (state, action) => {
            return action.payload
        }
    }
})

export const { setproducts } = productsSlice.actions;
export default productsSlice.reducer;
export const getProductsThunk = () => dispatch => {
    // Tareas a realizar
    dispatch( setIsLoading( true) );
    axios
    .get( "https://e-commerce-api-v2.academlo.tech/api/v1/products" )
    .then( resp => dispatch(setproducts(resp.data)) )
    .catch(error => console.error(error) )
    .finally( () => dispatch(setIsLoading(false) ) )
    //.finally método que se ejecuta cuando la promesa es resuelta ( sin importar si fue una respuesta satisfactoria o no)
};
