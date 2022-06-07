import {createSlice} from '@reduxjs/toolkit'

const initState = {
    header: true,
    navbar: true
}
const layoutSlice = createSlice({
    name: 'layout',
    initialState: initState,
    reducers: {
        UpdateLayout: (state, action) => {
            let initPayload = {...action.payload}
            state.header = initPayload.header
            state.navbar = initPayload.navbar
        },
        ToggleHeader: (state, action) => {
            state.header = action.payload.header
        }
    }
})
export const {UpdateLayout,ToggleHeader} = layoutSlice.actions
export default layoutSlice.reducer

