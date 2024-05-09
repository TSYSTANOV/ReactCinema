import {configureStore} from '@reduxjs/toolkit'
import BurgerMenuSlice from './BurgerMenuSlice'
const store = configureStore({
    reducer:{
        openBurgerMenu:BurgerMenuSlice
    }
})
export {store}