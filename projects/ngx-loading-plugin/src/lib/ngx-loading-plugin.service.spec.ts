import { TestBed } from '@angular/core/testing';

import { NgxLoadingPluginService } from './ngx-loading-plugin.service';

describe('NgxLoadingPluginService', () => {
  let service: NgxLoadingPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
