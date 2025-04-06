import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import bootstrapReducer from "@/store/bootstrap.store"
import themeReducer from "@/store/theme.store"

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    reducer: {
        bootstrap: bootstrapReducer,
        theme: themeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
