import { createReducer, on } from "@ngrx/store";
import { updateEmail, updateMobile, updateName } from "./userAction";
import { UserState } from "./userModel";


let initialState:UserState = {
    name:"",
    email:"",
    mobile:""
};

//dispatch({type:'',payload:''})
/* export function userReducer(state = initialState, action:any){
    switch(action.type) {
        case 'updateName':
            return {...state, name:action.payload.name};
        case 'updateEmail':
            return {...state, email:action.payload.email};
        case 'updateMobile':
            return {...state, mobile:action.payload.mobile};
        default:
          return state;    
    }
}

 */

export const userReducer = createReducer(
    initialState,
    on(updateName, (state, data) => ({...state, name: data.name})),
    on(updateEmail, (state, data) => ({...state, email: data.email})),
    on(updateMobile, (state, data) => ({...state, mobile: data.mobile}))
);