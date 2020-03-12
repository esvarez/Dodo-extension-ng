import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITask, Task } from 'src/app/shared/models';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'dol-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  tasks: Task[] = [
    {id: 1, task: "task 1", label: "default", complete: false },
    {id: 2, task: "task 2", label: "Work", complete: false },
    {id: 3, task: "task 3", label: "Daily", complete: false },
    {id: 1, task: "task 1", label: "default", complete: false },
    {id: 2, task: "task 2", label: "Work", complete: true },
    {id: 1, task: "task 1", label: "default", complete: true }
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ok')
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });
  }

  edit(item: any): void {   
    console.log(item)
  }
}
