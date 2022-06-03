import {createSlice} from '@reduxjs/toolkit'

const initState = {
    userToken: null,
}
const userStore = createSlice({
    name: "user",
    initialState: {},
    reducers: {}
})
export default userStore.reducer