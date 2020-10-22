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

  // @ts-ignore
  loadTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType( taskActions.loadTasks ),
      tap( data => console.log('tap ', data)),
      mergeMap(
        () => from(this.taskChromeService.getTasks())
          .pipe(
            tap( data => console.log(data)),
            // @ts-ignore
              map( tasks => taskActions.loadTasksSuccess({tasks})),
              catchError( err => of(taskActions.loadTasksError({ payload: err })) )
            )
          )
      )
  })
}
