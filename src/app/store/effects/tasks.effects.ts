import { Injectable } from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as taskActions from '../actions/tasks.actions'
import { TaskChromeService } from 'src/app/core/services/task-chrome.service'
import { map, mergeMap, tap, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions,
    private taskChromeService: TaskChromeService
  ) { }

  loadTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType( taskActions.loadTasks ),
      mergeMap(() => from(this.taskChromeService.getTasks())
          .pipe(
            // @ts-ignore
            map( tasks => taskActions.loadTasksSuccess({tasks})),
            catchError( err => of(taskActions.loadTasksError({ payload: err })))
          )
        )
      )
  })

  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType( taskActions.saveTask ),
      mergeMap(action => from(this.taskChromeService.saveTask(action.task))
        .pipe(
          map(task => taskActions.saveTaskSuccess({task})),
          catchError(err => of(taskActions.saveTaskFail({ payload: err })))
        )
      )
    )
  })

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType( taskActions.updateTask ),
      mergeMap(action => from(this.taskChromeService.updateTask(action.id, action.task))
        .pipe(
          map(tasks => taskActions.updateTaskSuccess({tasks})),
          catchError(err => of(taskActions.updateTaskFail({payload: err})))
        )
      )
    )
  })

  cancelEditingTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskActions.cancelEditingTask),
      mergeMap(action => from (this.taskChromeService.editingTask(action.task))
        .pipe(
          tap(data => console.log('cancel editing to store', data)),
          map(tasks => taskActions.cancelEditingTaskSuccess({tasks})),
          catchError(err => of(taskActions.cancelEditingTaskFail({payload: err})))
        )
      )
    )
  })

  editingTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskActions.editingTask),
      mergeMap(action => from (this.taskChromeService.editingTask(action.task))
        .pipe(
          tap(data => console.log('task editing to store', data)),
          map(tasks => taskActions.editingTaskSuccess({tasks})),
          catchError(err => of(taskActions.editingTaskFail({payload: err})))
        )
      )
    )
  })

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType( taskActions.deleteTask ),
      mergeMap( action => from( this.taskChromeService.deleteTask(action.id))
        .pipe(
          map(tasks => taskActions.deleteTaskSuccess({tasks})),
          catchError(err => of(taskActions.deleteTaskFail({payload: err})))
        )
      )
    )
  })
}
