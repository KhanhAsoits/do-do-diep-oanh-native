import {createSlice} from '@reduxjs/toolkit'

const initState = {
    user: {
        userName: 'Phạm Quang Linh',
        numberPhone: '0376658437',
        address: 'Ngõ 75 Hồ Tùng Mậu, Mai Dịch , Cầu Giấy, Hà Nội',
        email:"dangkhanh.dev@gmail.com"
    }

}
const userStore = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        UpdateProfile: (state, action) => {
            state.user = action.payload.user
        }
    }
})
export const {UpdateProfile} = userStore.actions
export default userStore.reducer