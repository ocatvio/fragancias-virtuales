import {configureStore } from '@reduxjs/toolkit';

import {apiSliceUser,apiSliceProduct,apiSliceBuy} from '../feature/index';
import buyReduccer from '../feature/buy/buy_slice';
import authReduccer from '../feature/user/authUser_slice';


export const store = configureStore({
    reducer:{
       
        [apiSliceUser.reducerPath]:apiSliceUser.reducer,
        [apiSliceProduct.reducerPath]:apiSliceProduct.reducer,
        [apiSliceBuy.reducerPath]:apiSliceBuy.reducer,
        buy:buyReduccer,
        auth:authReduccer
        

    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSliceUser.middleware,apiSliceProduct.middleware,apiSliceBuy.middleware)
       
        
        
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>



