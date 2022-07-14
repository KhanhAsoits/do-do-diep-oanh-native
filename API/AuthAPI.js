import axios from "axios";
import {BASE_URI} from "./BaseAPI";

export const loginAPI = async (email_,password_)=>{
    try {
        let uri = `${BASE_URI}/auth/login`
        let res = axios.post(uri,{email:email_,password:password_}).then((res)=>res.data)
        if (await res){return  res}
    }catch (e){
        console.log(e)
        return false
    }
}
