import { Action, ActionReducer } from "@ngrx/store";
import { taskReducer, TaskState } from "../tasks/task.reducer";

export interface AppState{
    tasks:TaskState
}

export interface AppStore {
    tasks: ActionReducer<TaskState,Action>
}

export const appStore:AppStore = {
    tasks:taskReducer
}