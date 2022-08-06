import {createSlice} from '@reduxjs/toolkit'

const initState = {
    data:null
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initState,
    reducers: {
        RestoreCategories:(state,action)=>{
            let initPayload = {...action.payload}
            switch (initPayload.type){
                case "RESTORE_CATEGORIES":
                    state.data = initPayload.categories
                    break;
            }
        }
    }
})
export const {RestoreCategories} = categoriesSlice.actions
export default categoriesSlice.reducer

