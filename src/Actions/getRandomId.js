import {getIdService} from '../Services/getIdService';
export const getRandomId = async() => {
         // getIdService is used for fetch id from api
        const details = await getIdService()
        console.log(details.data.near_earth_objects);
        return (details.data.near_earth_objects.map(({id})=>id));
}