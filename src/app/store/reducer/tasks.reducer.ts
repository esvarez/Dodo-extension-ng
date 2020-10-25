import { createReducer, on } from '@ngrx/store'
import {
  cancelEditingTaskFail,
  cancelEditingTaskSuccess,
  deleteTaskFail,
  deleteTaskSuccess, editingTask, editingTaskFail, editingTaskSuccess,
  loadTasks,
  loadTasksError,
  loadTasksSuccess,
  saveTask,
  saveTaskFail,
  saveTaskSuccess,
  updateTaskFail,
  updateTaskSuccess
} from '../actions/tasks.actions'
import { Task } from '../../shared/models'

export interface TasksState {
  tasks: Task[],
  taskEdit: Task,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const tasksInitialState: TasksState = {
  tasks: [],
  taskEdit: null,
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
  })),
  on(updateTaskSuccess, (state, { tasks }) => ({
    ...state,
    taskEdit: null,
    error: null,
    tasks: [ ...tasks]
  })),
  on(updateTaskFail, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
  on(editingTask, (state, { task }) => ({
    ...state,
    taskEdit: task
  })),
  on(editingTaskSuccess, (state, { tasks }) => ({
    ...state,
    error: null,
    tasks: [ ...tasks]
  })),
  on(editingTaskFail, (state, { payload }) => ({
    ...state,
    taskEdit: null,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
  on(cancelEditingTaskSuccess, (state, { tasks }) => ({
    ...state,
    taskEdit: null,
    error: null,
    tasks: [ ...tasks]
  })),
  on(cancelEditingTaskFail, (state, { payload }) => ({
    ...state,
    taskEdit: null,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
  on(deleteTaskSuccess, (state, { tasks }) => ({
    ...state,
    tasks: [ ...tasks ],
    error: null
  })),
  on(deleteTaskFail, (state, { payload }) => ({
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
