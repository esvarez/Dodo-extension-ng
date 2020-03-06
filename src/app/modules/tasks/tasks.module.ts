import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Modules */
import { NgZorroAntdModule } from 'ng-zorro-antd';

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';



@NgModule({
  declarations: [TaskIndexComponent, TaskListComponent, TaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
