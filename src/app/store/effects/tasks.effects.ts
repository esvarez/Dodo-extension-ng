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
          tap(data => console.log('add new task;', data)),
          map(task => {
            console.log(task)
            return taskActions.saveTaskSuccess({task})
          }),
          catchError(err => of(taskActions.saveTaskFail({ payload: err })))
        )
      )
    )
  })
}
