import {Component, ElementRef, OnDestroy, OnInit, ViewChildren} from '@angular/core'
import { Task } from '../../../../shared/models'
import {cancelEditingTask, updateTask} from '../../../../store/actions'
import { FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { AppState } from '../../../../app.reducer'
import { Store } from '@ngrx/store'
import { faTimesCircle, faSave } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'dodo-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy {
  faSave = faSave
  faTimesCircle = faTimesCircle
  private taskSubscriber: Subscription
  private task: Task

  taskCtrl = new FormControl('', Validators.required)

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.taskSubscriber = this.store.select('tasks').subscribe(({taskEdit}) => {
      this.task = taskEdit
      this.taskCtrl.setValue(this.task?.name)
    })
    document.getElementById('input').focus()
  }

  ngOnDestroy(): void {
    this.taskSubscriber.unsubscribe()
  }

  updateTask(): void {
    if (this.taskCtrl.valid) {
      const task: Task = Object.assign({}, this.task)
      task.name = this.taskCtrl.value
      task.editing = false
      this.store.dispatch(updateTask({id: task.id, task }))
    } else {
      this.taskCtrl.markAsTouched()
    }
  }

  cancelEditing(){
    const task: Task = Object.assign({}, this.task)
    task.editing = false
    this.store.dispatch(cancelEditingTask({task}))
  }
}
