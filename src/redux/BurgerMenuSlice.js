import { createSlice } from "@reduxjs/toolkit";
const BurgerMenuSlice= createSlice({
    name:'burgerMenu',
    initialState:{
        open:false
    },
    reducers:{
        handleOpen:(state)=>{
            state.open = !state.open
        }
    }
})
export const {handleOpen} = BurgerMenuSlice.actions
export default BurgerMenuSlice.reducer