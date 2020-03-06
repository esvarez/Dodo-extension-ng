import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Ng Zorro Modules */
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzListModule,
    NzPageHeaderModule,
    NzSkeletonModule
  ]
})
export class NgZorroModule { }
