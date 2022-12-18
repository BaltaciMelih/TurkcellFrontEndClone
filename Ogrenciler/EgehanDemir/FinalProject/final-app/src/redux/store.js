import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './Games'
import formSlice from './reducers/Form'

export const store = configureStore({
    reducer: {
        app: gameSlice,
        user: formSlice
    }   
}) 

