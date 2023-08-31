import {createSlice} from '@reduxjs/toolkit'

const favSlice=createSlice({
    name:'fav',
    initialState:{
        fav:[]
    },
    reducers:{
        add:(state,action)=>{
           // state.push(action.payload)
           const inCart= state.fav.find((item) => item === action.payload);
            if (!inCart) {
                state.fav.push(action.payload);
            }   
        },
        remove:(state,action)=>{
                state.fav=state.fav.filter((obj)=>obj !== action.payload)
        }
    },
});

export const {add,remove}=favSlice.actions
export default favSlice.reducer