import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Modules */
import { NgZorroModule } from '../ng-zorro/ng-zorro.module';

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd';


@NgModule({
  declarations: [TaskIndexComponent, TaskListComponent, TaskFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    NgZorroModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
