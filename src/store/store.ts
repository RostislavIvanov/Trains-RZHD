import {configureStore} from "@reduxjs/toolkit";
import trainsReducer from './trainsSlice'


export const store = configureStore({
    reducer: {
        trainsReducer,
    },
    // middleware: [...middlewares],
    devTools: true // это включит Redux DevTools
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch