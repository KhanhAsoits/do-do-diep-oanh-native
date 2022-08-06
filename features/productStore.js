import {createSlice} from '@reduxjs/toolkit'
import pdImage from "../assets/images/product.png";

const initState = {
    data:[
        {
            image:pdImage,
            name:"Chậu Đồng Hoa Văn Cổ",
            rate:4,
            category:{
                title:"Đồ thờ cúng"
            },
            detail:"Trống được đúc từ đồng nguyên chất , có khắc hoa văn dân tộc cổ xưa, tinh hoa dân tộc.",
            price:1280000,
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            image:pdImage,
            name:"Bài vị thờ gia tiên bằng đồng vàng",
            rate:4,
            category:{
                title:"Đồ thờ cúng"
            },
            detail:"Trống được đúc từ đồng nguyên chất , có khắc hoa văn dân tộc cổ xưa, tinh hoa dân tộc.",
            price:1990000,
            size: '60cm x 30cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            image:pdImage,
            name:"Chân nến bằng đồng catut",
            rate:6,
            category:{
                title:"Đồ thờ cúng"
            },
            detail:"Trống được đúc từ đồng nguyên chất , có khắc hoa văn dân tộc cổ xưa, tinh hoa dân tộc.",
            price:2760000,
            size: '60cm x 30cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            image:pdImage,
            name:"Hạc đồng thếp vàng 9999 cực đẹp",
            rate:5,
            category:{
                title:"Đồ thờ cúng"
            },
            detail:"Trống được đúc từ đồng nguyên chất , có khắc hoa văn dân tộc cổ xưa, tinh hoa dân tộc.",
            price:3880000,
            size: '60cm x 30cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        }
    ]
}
const productsSlice = createSlice({
    name: 'products',
    initialState: initState,
    reducers: {
        RestoreProducts:(state,action)=>{
            let initPayload = {...action.payload}
            switch (initPayload.type){
                case "RESTORE_PRODUCTS":
                    state.data = initPayload.products
                    break;
            }
        }
    }
})
export const {RestoreProducts} = productsSlice.actions
export default productsSlice.reducer

