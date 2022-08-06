import axios from "axios";
import {BASE_URI} from "./BaseAPI";

export const loginAPI = async (email_,password_)=>{
    try {
        let uri = `${BASE_URI}/auth/login`
        let res = await axios.post(uri,{email:email_,password:password_})
        return res.status === 200 ? res.data : null
    }catch (e){
        console.log(e)
        return false
    }
}
