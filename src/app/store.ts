import {configureStore, ThunkMiddleware } from '@reduxjs/toolkit';

import {apiSliceUser,apiSliceProduct} from '../feature/index';
import buyReduccer from '../feature/buy/buy_slice';
import authReduccer from '../feature/user/authUser_slice';


export const store = configureStore({
    reducer:{
       
        [apiSliceUser.reducerPath]:apiSliceUser.reducer,
        [apiSliceProduct.reducerPath]:apiSliceProduct.reducer,
        buy:buyReduccer,
        auth:authReduccer
        

    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSliceUser.middleware,apiSliceProduct.middleware)
       
        
        
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>



