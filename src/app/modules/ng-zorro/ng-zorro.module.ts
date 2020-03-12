import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { 
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzListModule,
  NzPageHeaderModule,
  NzSelectModule,
  NzSkeletonModule
} from 'ng-zorro-antd'



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzListModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzSkeletonModule
  ]
})
export class NgZorroModule { }
