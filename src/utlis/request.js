import axios from 'axios'

axios.defaults.baseURL = "http://localhost/learning/back/";

export const requestAPI =  async({route,method = 'GET' ,body,header='application/x-www-form-urlencoded'}) =>{
    try{
        const respons = await axios.request({
            url:`${route}.php`,
            method,
            data:body,
            headers:{
                'Content-Type': header,
                // "Content-Type":"application/json",  application/x-www-form-urlencoded
                Authorization:localStorage.token,
            }
        });
        return respons.data;

    }catch (error){
        return error;
    }


}
