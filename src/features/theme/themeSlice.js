import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        light: true
    },
    reducers: {
        setLight: (state) => {
            state.light = true
        },
        setDark: (state) => {
            state.light = false
        }
    }
})

export const { setLight, setDark } = themeSlice.actions
export default themeSlice.reducer