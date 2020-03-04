import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { NzButtonModule } from 'ng-zorro-antd/button'

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskComponent } from './components/task/task.component';



@NgModule({
  declarations: [TaskIndexComponent, TaskComponent],
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
