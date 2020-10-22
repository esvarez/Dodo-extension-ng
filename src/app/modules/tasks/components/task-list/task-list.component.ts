import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { Task } from '../../../../shared/models'
import {Store} from '@ngrx/store'
import {AppState} from '../../../../app.reducer'
import {loadTasks} from '../../../../store/actions/tasks.actions'
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
  tasks: Task[] = []

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // chrome.storage.sync.clear(() => {})
    this.store.select('tasks').subscribe(({tasks}) => {
      this.tasks = tasks
    })

    this.store.dispatch(loadTasks())
  }
}
