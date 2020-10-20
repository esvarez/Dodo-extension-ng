import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import {Task} from "../../../../shared/models";
@Component({
  selector: 'dodo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  faPen = faPen
  faCheck = faCheck
  faCircle = faCircle
  faTimesCircle = faTimesCircle
  tasks: Task[]
  constructor() { }

  ngOnInit(): void {
    console.log("Init")
    this.getTask()
  }

  private getTask() {
    const that = this
    chrome.storage.sync.get('tasks', function (result) {
      const tasks = result.tasks
      console.log(tasks)

      that.print(tasks)
    })
  }

  private print(x){
    console.log('print x', x)
    this.tasks = x
    console.log(this.tasks)
  }
}
