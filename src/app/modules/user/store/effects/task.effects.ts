import { Injectable } from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as taskActions from '../actions/task.actions'

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions) {

  }

  loadTask$ = createEffect(
    () => this.actions$.pipe(
      ofType( taskActions.loadTasks )
    )
  )
}
