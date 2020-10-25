export interface ITask {
  id?: string
  name: string
  done: boolean
  editing?: boolean
}

export class Task implements ITask {
  id?: string
  name: string
  done: boolean
  editing?: boolean
  constructor(name: string) {
    this.id = Date.now().toString()
    this.name = name
    this.done = false
    this.editing = false
  }
}
