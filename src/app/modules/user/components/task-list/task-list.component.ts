import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'dodo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  faPen = faPen
  faCheck = faCheck
  faCircle = faCircle
  faTimesCircle = faTimesCircle

  constructor() { }

  ngOnInit(): void {
  }

}
