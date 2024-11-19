let initialState = {
    name:"",
    email:"",
    mobile:""
};

//dispatch({type:'',payload:''})
export function userReducer(state = initialState, action:any){
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