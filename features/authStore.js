import {createSlice} from '@reduxjs/toolkit'

const initState = {
    userToken: null,
    isLoading: true,
    isSignOut: true,
    isErr: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        SignInFailed: (state, action) => {
            let initPayload = {...action.payload}
            state.isErr = initPayload.isErr
        },
        UpdateLoading: (state, action) => {
            let initPayload = {...action.payload}
            state.isLoading = initPayload.isLoading
        },
        RestoreToken: (state, action) => {
            let initPayload = {...action.payload}
            state.userToken = initPayload.token
            state.isLoading = false
            state.isSignOut = true
        },
        UpdateIsErr: (state, action) => {
            let initPayload = {...action.payload}
            state.isErr = initPayload.isErr
        },
        BeforeSignIn: (state, action) => {
            let initPayload = {...action.payload}
            state.isLoading = true
            state.isSignOut = false
        },
        SignIn: (state, action) => {
            let initPayload = {...action.payload}
            state.userToken = initPayload.token
            state.isLoading = false
            state.isErr = initPayload.isErr
            state.isSignOut = false
        },
        SignOut: (state, action) => {
            let initPayload = {...action.payload}
            state.userToken = null
            state.isLoading = false
            state.isSignOut = true
        },
        SignUp: (state, action) => {
            let initPayload = {...action.payload}
            state.userToken = initPayload.token
            state.isLoading = false
            state.isErr = initPayload.isErr
            state.isSignOut = false
        },
    }
})
export const {SignIn, SignOut, SignUp, RestoreToken, UpdateLoading, SignInFailed, BeforeSignIn,UpdateIsErr} = authSlice.actions

export default authSlice.reducer