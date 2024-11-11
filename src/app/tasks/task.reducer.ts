import { createReducer, on } from "@ngrx/store";
import { addTask,updateTask,deleteTask } from "./task.action";
import { Task } from "./task.model";

export interface TaskState {
    tasks:Task[];
};

export const initialState:TaskState = {
    tasks:[]
};

/*export function taskReducer(state = initialState, action:any):TaskState {
    switch(action.type) {
        case addTask.type:
            return { ...state, 
                    tasks: [...state.tasks, action.task] 
                   };
        case updateTask.type:
            return { ...state,
                       tasks: state.tasks.map(task => (task.id === action.task.id ? action.task : task)) 
                    };
        case deleteTask.type:
                return {
                    ...state,
                    tasks:state.tasks.filter((task) => task.id !== action.task.id)
                }            
        default:
            return state;
    }
}*/

export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, {task}) => ({...state, tasks:[...state.tasks, task]})),
    on(updateTask, (state, {task}) => ({...state, tasks:state.tasks.map(t => t.id ===task.id?task:t)})),
    on(deleteTask,(state, {id}) => ({...state, tasks:state.tasks.filter(t =>t.id !== id)}))
)