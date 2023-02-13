import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import * as T from '../../types/index';




export const apiSliceUser = createApi({
    reducerPath: "api_user",
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://back-perfumeria-production.up.railway.app",
    }),
    endpoints: (builder) => ({


        getUser: builder.query<T.User.Response, number | void>({
            query() {
                return '/user'
            }, providesTags: ["Users"]
        },),
        getUserById: builder.query<T.User.Response, string | void>({

            query(id) {
                return `/user/${id}`
            }
        }),
        addUser: builder.mutation({
            query: (newUser) => ({
                url: "/User",
                method: "post",
                body: newUser
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            
            query: (id) => ({
               
                url: `/user/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags: ['Users'],
        }),


    })
})

export const {
    useGetUserQuery,
    useGetUserByIdQuery,
    useAddUserMutation,
    useDeleteUserMutation
} = apiSliceUser