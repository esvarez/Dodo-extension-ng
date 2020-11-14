import { Component, OnInit } from '@angular/core'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'dodo-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  calendar = faCalendar
  arrowLeft = faAngleLeft
  arrowRight = faAngleRight

  weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  constructor() { }

  ngOnInit(): void {
  }

}
