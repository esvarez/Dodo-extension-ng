import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Modules */
import { NgZorroAntdModule } from 'ng-zorro-antd';

/** Components */
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NgZorroModule } from '../ng-zorro/ng-zorro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [TaskIndexComponent, TaskListComponent, TaskFormComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroModule
  ],
  exports: [
    TaskIndexComponent
  ]
})
export class TasksModule { }
