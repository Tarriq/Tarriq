import { configureStore } from '@reduxjs/toolkit'
import voitureReducer from '../slices/data-slice'



    const store = configureStore({
      reducer: {
        voitures: voitureReducer
      },
    })
export default store