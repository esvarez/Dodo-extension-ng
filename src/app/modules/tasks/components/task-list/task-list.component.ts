import { Component, OnInit } from '@angular/core'
import { faCheck, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { Task } from '../../../../shared/models'
import {Store} from '@ngrx/store'
import {AppState} from '../../../../app.reducer'
import {deleteTask, loadTasks, updateTask} from '../../../../store/actions/tasks.actions'
// @ts-ignore
import Timeout = NodeJS.Timeout
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
  removeList: Map<string, Timeout> = new Map<string, Timeout>()

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

  toggleTask(index: number): void {
    const task: Task = Object.assign({}, this.tasks[index])
    task.done = !task.done
    this.store.dispatch(updateTask({id: task.id, task }))
    this.removeTask(task)
  }

  deleteTask(index: number): void {
    const task = this.tasks[index]
    this.store.dispatch(deleteTask({id: task.id}))
  }

  private removeTask(task: Task): void {
    if (task.done) {
      const event = setTimeout(() => this.store.dispatch(deleteTask({id: task.id})), 1000)
      this.removeList.set(task.id, event)
    } else {
      clearTimeout(this.removeList.get(task.id))
    }
  }
}
