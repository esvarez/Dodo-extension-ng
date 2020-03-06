import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TaskIndexComponent, TaskListComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzListModule,
    NzSkeletonModule,
    FormsModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
