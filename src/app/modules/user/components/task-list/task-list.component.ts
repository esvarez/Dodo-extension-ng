import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { Task } from '../../../../shared/models'
import {Store} from '@ngrx/store'
import {AppState} from '../../../../app.reducer';
import {loadTasks} from "../../store/actions/tasks.actions";
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
  tasks: Promise<unknown>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    console.log('init')

    this.store.dispatch(loadTasks())
    /*
    this.getTask()
    const that = this
    this.getData().then(function(item: any) {
      // Returns "bar"
      console.log('... ', item)

      that.tasks = item
    })*/
  }

  private getTask() {
    const that = this
    chrome.storage.sync.get('tasks', function (result) {
      const tasks = result.tasks
      // console.log(tasks)
      // that.tasks = tasks
      // that.print(tasks)
    })
  }

  private getData() {
    return new Promise(function(resolve, reject) {
      chrome.storage.sync.get('tasks', function(items) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message)
          reject(chrome.runtime.lastError.message)
        } else {
          console.log(items)
          resolve(items.tasks)
        }
      })
    })
  }


  private print(x){
    console.log('print x', x)
    this.tasks = x
    console.log(this.tasks)
  }
}
