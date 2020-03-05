import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { NzListModule } from 'ng-zorro-antd/list'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzButtonModule } from 'ng-zorro-antd/button'

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';



@NgModule({
  declarations: [TaskIndexComponent, TaskListComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzListModule,
    NzSkeletonModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
