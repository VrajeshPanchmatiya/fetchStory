import Axios from 'axios';
// fetch Service is used for Aestroid detail with the help of id
export const fetchService = (id) =>{
    return  (Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=EeQ31UuaU3suyNTT0M1VPwY4hYPvNhMQG3z6L7SS`));
}