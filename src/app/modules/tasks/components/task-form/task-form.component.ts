import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'dol-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less']
})
export class TaskFormComponent implements OnInit {
  validateTask: FormGroup;

  submitForm(): void {
    for (const i in this.validateTask.controls) {
      this.validateTask.controls[i].markAsDirty();
      this.validateTask.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateTask = this.fb.group({
      task: [null, [Validators.required]],
      description: [null, [Validators.required]],
      date: [null, [Validators.required]],

      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  selectedValue = 'lucy';

}
