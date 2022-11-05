import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import * as T from '../../types/index';




export const apiSliceProduct = createApi({
    reducerPath: "api_product",
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://back-perfumeria-production-23ad.up.railway.app",
    }),
    endpoints: (builder) => ({


        getProduct: builder.query<T.Product.Response, number | void>({
            query() {
                return '/product'

            } ,providesTags: ['Products'],
          
        }),
        getProductById:builder.query<T.Product.Response,string|void>({

            query(id){
                console.log(id)
                return `/product/${id}`
            },providesTags: ['Products']
        }),
        addProduct: builder.mutation({
            query:(newProduct)=>({
                url:'/product',
                method:"POST",
                body:newProduct
            }),invalidatesTags: ["Products"]
        }),
        deleteProduct: builder.mutation({
            
            query: (id) => ({
               
                url: `/product/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags: ['Products'],
        }),


    })
})

export const {
    useGetProductQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = apiSliceProduct