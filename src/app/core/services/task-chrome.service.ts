import { Injectable } from '@angular/core'
import { Task } from 'src/app/shared/models'

@Injectable({
  providedIn: 'root'
})
export class TaskChromeService {

  private KEY = 'tasks'

  constructor() {
  }

  public saveTask(task: Task): Promise<Task> {
    const that = this
    return new Promise(resolve => {
      chrome.storage.sync.get(that.KEY, result => {
        let tasks = result[that.KEY]
        if (tasks === undefined) { tasks = [] }
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
        if (items[that.KEY] === undefined) {
          resolve([])
        }
        resolve(items[that.KEY])
      })
    })
  }

  public updateTask(id: string, taskToUpdate: Task): Promise<Task[]> {
    const that = this
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(that.KEY, items => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message)
          reject(chrome.runtime.lastError.message)
        }

        const tasks = items[that.KEY]
        for (const i in tasks) {
          if (tasks[i].id === id) {
            tasks[i] = taskToUpdate
            break
          }
        }
        chrome.storage.sync.set({tasks}, () => resolve(tasks))
      })
    })
  }

  public deleteTask(id: string): Promise<Task[]> {
    const that = this
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(that.KEY, items => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message)
          reject(chrome.runtime.lastError.message)
        }

        const tasks = items[that.KEY]
        for (const i in tasks) {
          if (tasks[i].id === id) {
            tasks.splice(i, 1)
            break
          }
        }
        chrome.storage.sync.set({tasks}, () => resolve(tasks))
      })
    })
  }
}
