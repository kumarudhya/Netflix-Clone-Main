import { create } from "apisauce";
import cache from '../app/utility/cache.js'

const apiClient = create({
  // baseURL: "http://192.168.43.115:9000/api",
  // ipconfig => ipv4 address
  baseURL: "http://192.168.64.73:5500",
});

const get= apiClient.get;
apiClient.get= async(url,params, axiosConfig)=>{
    const response= await get(url,params,axiosConfig);
    if(response.ok){
    cache.store(url,response.data)
    return response;
    }

    const data= await cache.get(url)
    return data ? {ok:true,data} : response;
}


export default apiClient;