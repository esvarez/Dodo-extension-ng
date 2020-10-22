import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer
} from '@ngrx/store'
import { environment } from '../environments/environment'
import * as reducers from './store/reducer'

export interface AppState {
  tasks: reducers.TasksState
}

export const appReducers: ActionReducerMap<AppState> = {
  tasks: reducers.tasksReducer
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: any): AppState => {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : []
