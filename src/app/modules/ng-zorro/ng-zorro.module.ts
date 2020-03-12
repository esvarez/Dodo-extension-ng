import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

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
  NzSkeletonModule,
  en_US,
  NZ_I18N
} from 'ng-zorro-antd'

/** Confign anglar i18n */
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en';
registerLocaleData(en)



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
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US}
  ]
})
export class NgZorroModule { }
