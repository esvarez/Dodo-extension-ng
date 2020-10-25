import { Component } from '@angular/core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { Task } from '../../../../shared/models'
import { FormControl, Validators } from '@angular/forms'
import { AppState } from '../../../../app.reducer'
import { saveTask } from '../../../../store/actions'

@Component({
  selector: 'dodo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  faPlus = faPlus
  task = new FormControl('', Validators.required)

  constructor(
    private store: Store<AppState>
  ) { }

  addTask(): void {
    if (this.task.valid) {
      const task: Task = new Task(this.task.value)
      this.store.dispatch(saveTask({task}))
      this.task.setValue('')
      this.clearFocus()
    } else {
      this.task.markAsTouched()
    }
  }

  clearFocus(): void {
    this.task.markAsUntouched()
  }
}
