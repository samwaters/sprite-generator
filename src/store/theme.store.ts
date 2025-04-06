import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from "@/store.ts";

export interface ThemeState {
    darkMode: boolean
}

const initialState: ThemeState = {
    darkMode: false,
}

const themeSlice = createSlice({
    initialState,
    name: "theme",
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload
        },
    },
})

export const getDarkMode = (state: RootState) => state.theme.darkMode
export const { setDarkMode } = themeSlice.actions
export default themeSlice.reducer
