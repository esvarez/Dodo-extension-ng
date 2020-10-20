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
      const taskToDo: Task = { id: Date.now().toString(), name: this.task.value, done: false }
      chrome.storage.sync.get(['tasks'], function (result){
        let tasks = result.tasks
        if (tasks === undefined) tasks = []
        tasks.push(taskToDo)
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
