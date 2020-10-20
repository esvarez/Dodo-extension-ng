import { TestBed } from '@angular/core/testing';

import { TaskChromeService } from './task-chrome.service';

describe('TaskChromeService', () => {
  let service: TaskChromeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskChromeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
