import Axios from 'axios';
//getIdService is used to fetch id of Aestroid
export const getIdService = () =>{
    return Axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
}