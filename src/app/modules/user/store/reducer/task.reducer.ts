import { createReducer, on } from '@ngrx/store'
import { save } from '../actions/task.actions'
import {Task} from '../../../../shared/models'

export const initialState: Task[] = []

const _taskReducer = createReducer(initialState,
  on(save, (state, task) => [...state, task])
)

export function taskReducer(state, action) {
  return _taskReducer(state, action)
}
