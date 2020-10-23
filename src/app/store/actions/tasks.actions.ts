import { createAction, props } from '@ngrx/store'
import { Task } from '../../shared/models/task'

export const loadTasks = createAction('[TASK] Load tasks')

export const loadTasksSuccess = createAction(
  '[TASK] Load tasks success',
  props<{ tasks: Task[] }>()
)

export const loadTasksError = createAction(
  '[TASK] Load tasks fail',
  props<{ payload: any }>()
)

export const saveTask = createAction(
  '[TASK] Save task action',
  props<{ task: Task }>()
)

export const saveTaskSuccess = createAction(
  '[TASK] save task success',
  props<{task: Task}>()
)

export const saveTaskFail = createAction(
  '[TASK] save task error',
  props<{payload: any}>()
)

export const updateTask = createAction(
  '[TASK] update task action',
  props<{id: string, task: Task}>()
)

export const updateTaskSuccess = createAction(
  '[TASK] update task success',
  props<{tasks: Task[]}>()
)

export const updateTaskFail = createAction(
  '[TASK] update task error',
  props<{payload: any}>()
)

export const deleteTask = createAction(
  '[TASK] delete task action',
  props<{id: string}>()
)

export const deleteTaskSuccess = createAction(
  '[TASK] delete task success',
  props<{tasks: Task[]}>()
)

export const deleteTaskFail = createAction(
  '[TASK] delte task fail',
  props<{payload: any}>()
)
