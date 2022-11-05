import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as T from '../../types/index'

interface auth {
  user:T.User.Request,
  logged:false,
  
}

const initialState:Array<auth>=[]

export const authSlice = createSlice(
    {
       name:'auth',
       initialState,
       reducers:{
        login(state,action:PayloadAction<auth>){

            console.log("en el starage",action.payload)
          state.push(action.payload)
        },
        logout:(state)=>{
            state.splice(0,state.length)
        }
       }
    }
)

export const {login,logout} = authSlice.actions
export default  authSlice.reducer