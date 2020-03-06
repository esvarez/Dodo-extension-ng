export interface ITask {
   id?: Number
   task: String
   description?: String
   complete: Boolean
}

export class Task implements ITask {
   id?: Number;   
   task: String;
   description?: String
   complete: Boolean;
   constructor(task: ITask) {
      this.id = task && task.id || null
      this.task = task && task.task || null
      this.description = task && task.description || null
      this.complete = task && task.complete || false
   }

}