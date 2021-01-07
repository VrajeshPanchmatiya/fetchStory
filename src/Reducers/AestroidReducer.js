import {AestroidIdType} from '../Actions/ActionType/AestroidIdType';
const initialState={
    data:''
}
// AestroidReducer for pass data
export const AestroidReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case AestroidIdType:
            return{...state,data:payload}
    }
    return state
}