import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../../../../shared/models";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'dodo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  faPlus = faPlus
  task = new FormControl('', Validators.required)
  constructor() { }

  addTask() {
    if (this.task.valid) {
      let taskToDo: Task = { id: Date.now().toString(), name: this.task.value, done: false }
      chrome.storage.sync.get('tasks', function (app){
        if (app.tasks.length === undefined) {
          app.tasks = [taskToDo]
        } else {
          app.tasks.push(taskToDo)
        }
        const tasks = app.tasks
        chrome.storage.sync.set({tasks}, function (){ })
      })
      this.task.setValue('')
      this.clearFocus()
    } else {
      this.task.markAsTouched()
    }
  }

  clearFocus() {
    this.task.markAsUntouched()
  }
}
