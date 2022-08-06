import axios from "axios";
import {BASE_URI,config} from "./BaseAPI";

export const fetchAllCategories = async ()=>{
    let config_ = await config();
    let res = await axios.post(`${BASE_URI}/categories`,{},config_)
    return res.status === 200 ? res.data : null
}
