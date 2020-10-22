import { createAction, props } from '@ngrx/store'
import {Task} from '../../../../shared/models/task'

export const loadTasks = createAction('[TASK] Load actions')

export const loadTasksSuccess = createAction(
  '[TASK] Load task success',
  props<{ tasks: Task[] }>()
)

export const loadTasksError = createAction(
  '[TASK] Load task fail',
  props<{ payload: any }>()
)

export const save = createAction(
  '[TASK] Save action',
  props<{ task: Task }>()
)
