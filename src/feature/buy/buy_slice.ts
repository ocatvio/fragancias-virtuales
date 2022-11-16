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
        },
        clearCar(state){
            state.length=0
        }

    }
})


export const {addCar,clearCar} = buySlice.actions
export default buySlice.reducer