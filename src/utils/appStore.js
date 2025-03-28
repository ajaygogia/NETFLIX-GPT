import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../slices/userSlice"

const appStore = configureStore({
    reducer: userSlice
})

export default appStore