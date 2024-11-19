/* export function updateName(name: any) {
    return  {
        type:'updateName',
        payload:{name:name}
    }
}

export function updateEmail(name: any) {
    return  {
        type:'updateEmail',
        payload:{email:name}
    }
}

export function updateMobile(name: any) {
    return  {
        type:'updateMobile',
        payload:{mobile:name}
    }
} */

import { createAction, props } from "@ngrx/store";


   export const updateName =   createAction('updateName', props<{name:string}>());
   export const updateEmail =  createAction('updateEmail', props<{email:string}>());
   export const updateMobile = createAction('updateMobile', props<{mobile:string}>());