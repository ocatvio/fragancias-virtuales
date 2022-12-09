import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as T from '../../types/index'

interface auth {
  user:T.User.Request,
  logged:boolean,
  
}

const initialState:auth={
  user:{
    privilage:"invitado",
    name:'',
    address:0,
    email:'',
    id:'',
    phone:'',
    image:{
      public_id:'',
      secure_url:''
    }
  },
  logged:false
}

export const authSlice = createSlice(
    {
       name:'auth',
       initialState,
       reducers:{
        login(state,action:PayloadAction<T.User.Request>){

         
          state.user=action.payload
          state.logged=true
        },
        logout:(state)=>{
            state.logged=false
            state.user = initialState.user
        }
       }
    }
)

export const {login,logout} = authSlice.actions
export default  authSlice.reducer