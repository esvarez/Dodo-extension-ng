import { createReducer, on } from '@ngrx/store'
import {
  loadTasks,
  loadTasksError,
  loadTasksSuccess,
  saveTask,
  saveTaskFail,
  saveTaskSuccess
} from '../actions/tasks.actions'
import { Task } from '../../shared/models'

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

// tslint:disable-next-line:variable-name
const _tasksReducer = createReducer(tasksInitialState,
  on(loadTasks, state => ({...state, loading: true})),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
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
  })),
  on(saveTask, state => ({... state})),
  on(saveTaskSuccess, (state, {task})  => ({
    ...state,
    tasks: [ ...state.tasks, task],
    error: null
  })),
  on(saveTaskFail, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
)

export function tasksReducer(state, action): any {
  return _tasksReducer(state, action)
}
