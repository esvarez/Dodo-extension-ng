import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { 
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzListModule,
  NzPageHeaderModule,
  NzSelectModule,
  NzSkeletonModule 
} from 'ng-zorro-antd'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzListModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzSkeletonModule
  ]
})
export class NgZorroModule { }
