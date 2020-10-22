import { Injectable } from '@angular/core'
import { Task } from 'src/app/shared/models'

@Injectable({
  providedIn: 'root'
})
export class TaskChromeService {

  private KEY = 'tasks'
  constructor() { }

  public saveTask(task: Task): Promise<Task> {
    return new Promise(resolve => {
      chrome.storage.sync.get(this.KEY,  result => {
        let tasks = result.tasks
        if (tasks === undefined){ tasks = [] }
        tasks.push(task)
        chrome.storage.sync.set({tasks}, () => resolve(task))
      })
    })
  }

  public getTasks(): Promise<Task[]> {
    const that = this
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(that.KEY, items => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message)
          reject(chrome.runtime.lastError.message)
        }
        if (items[that.KEY] === undefined) { resolve([]) }
        resolve(items[that.KEY])
      })
    })
  }
}
