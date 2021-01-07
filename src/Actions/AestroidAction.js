import {AestroidIdType} from './ActionType/AestroidIdType';
import {fetchService} from '../Services/fetchService';
export const AestroidAction = (id) =>{
    return async(dispatch)=>{
        console.log(id);
        const details = await (fetchService(id))
        console.log(details);
        dispatch({type:AestroidIdType,payload:details.data})
    }
}