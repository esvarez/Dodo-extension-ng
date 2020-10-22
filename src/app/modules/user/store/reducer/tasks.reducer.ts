import { createReducer, on } from '@ngrx/store'
import {loadTasks, loadTasksError, loadTasksSuccess, save} from '../actions/tasks.actions'
import { Task } from '../../../../shared/models'

export interface TasksState {
  tasks: Task[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const tasksInitialState: TasksState = {
  tasks: [],
  loaded: false,
  loading: false,
  error: null
}

const _tasksReducer = createReducer(tasksInitialState,
  on(loadTasks, state => ({...state, loading: true})),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    loaded: true,
    tasks: [...tasks]
  })),
  on(loadTasksError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
)

export function tasksReducer(state, action) {
  return _tasksReducer(state, action)
}
