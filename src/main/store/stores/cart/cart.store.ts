import { createSlice } from '@reduxjs/toolkit';
import IProduct from '../../../interfaces/IProduct';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addProductToCart(state, action) {
            const newProduct: IProduct = action.payload.product;
            const quantity = action.payload.quantity ? action.payload.quantity : 1;
            const existingProduct = state.products.find(
                (p) => p.id === action.payload.product.id
            );

            state.totalPrice += Number(action.payload.quantity) * Number(action.payload.product.price);
            if(!existingProduct){
                state.products.push({
                    id: newProduct.id,
                    name: newProduct.name,
                    price: newProduct.price,
                    categoryId: newProduct.categoryId,
                    shortDescription: newProduct.shortDescription,
                    longDescription: newProduct.longDescription,
                    base64Image: newProduct.base64Image,
                    quantity: Number(quantity),
                    productTotalPrice: Number(quantity) * Number(newProduct.price),
                });
            }else{
                existingProduct.quantity += Number(quantity);
                existingProduct.productTotalPrice = Number(existingProduct.quantity)*Number(newProduct.price);
            }
        },

        removeProductFromCart(state, action){
            const id: Number = action.payload;
            const existingProduct = state.products.find(
                (p) => p.id === id
            );
            state.totalPrice = state.totalPrice - existingProduct.price;
            if(existingProduct.quantity === 1){
                state.products = state.products.filter((product) => product.id !== id);
            }else{
                existingProduct.quantity--;
                existingProduct.productTotalPrice= existingProduct.productTotalPrice - existingProduct.price;
            }
        },
        resetCart(state){
            state.products = [];
            state.totalPrice = 0;
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice;