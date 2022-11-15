import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import * as T from '../../types/index';

export const apiSliceBuy = createApi({
    reducerPath: "api_buy",
    tagTypes: ['Buys'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        getBuy: builder.query<T.Product.Response, number | void>({
            query() {
                return '/buy'
            } ,providesTags: ['Buys'],
        }),
        getBuyById:builder.query<T.Product.Response,string|void>({
            query(id){
                console.log(id)
                return `/buy/${id}`
            },providesTags: ['Buys']
        }),
        addBuy: builder.mutation({
           
            query:(newBuy)=>({
                
                url:'/buy',
                method:"POST",
                body:newBuy
            }),invalidatesTags: ["Buys"]
        }),
        deleteBuy: builder.mutation({
            query: (id) => ({
               
                url: `/buy/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Buys'],
        }),
    })
})

export const {
    useGetBuyQuery,
    useGetBuyByIdQuery,
    useAddBuyMutation,
    useDeleteBuyMutation
} = apiSliceBuy