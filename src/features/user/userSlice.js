import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null,
        photo: null
    },
    reducers: {
        setCredentials: (state, {name,email,photo}) => {
            state.name =  name
            state.email =  email
            state.photo =  photo
        }
    }
})

export const { setCredentials } = userSlice.actions
export default userSlice.reducer