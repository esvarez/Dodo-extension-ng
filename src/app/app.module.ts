/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Location } from '@angular/common';

/** Modules */
import { TasksModule } from 'src/app/modules/tasks/tasks.module'

/** Components */
import { AppComponent } from './app.component';

/** Ng Zorro */
import { NZ_I18N, en_US } from 'ng-zorro-antd'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TasksModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
