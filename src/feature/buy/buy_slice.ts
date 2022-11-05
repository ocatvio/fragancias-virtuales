import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';



const initialState:Array<string>=[]

const buySlice = createSlice({
    name:"buy",
    initialState,
    reducers:{
        addCar(state,action:PayloadAction<string>){
            console.log("buy add ")
            state.push(action.payload)
        }
    }
})


export const {addCar} = buySlice.actions
export default buySlice.reducer