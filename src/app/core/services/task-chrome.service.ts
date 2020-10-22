import { Injectable } from '@angular/core'
import { Task } from 'src/app/shared/models'

@Injectable({
  providedIn: 'root'
})
export class TaskChromeService {

  constructor() { }

  public saveTask(task: Task) {
    chrome.storage.sync.get(['tasks'], function (result){
      let tasks = result.tasks
      if (tasks === undefined) tasks = []
      tasks.push(task)
      chrome.storage.sync.set({tasks}, function (){ })
    })
  }

  public getTasks() {
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
}
