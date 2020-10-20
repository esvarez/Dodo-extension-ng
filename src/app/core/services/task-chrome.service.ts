import { Injectable } from '@angular/core';
import { Task } from "src/app/shared/models";

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
}
