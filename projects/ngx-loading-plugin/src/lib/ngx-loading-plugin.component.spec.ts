import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingPluginComponent } from './ngx-loading-plugin.component';

describe('NgxLoadingPluginComponent', () => {
  let component: NgxLoadingPluginComponent;
  let fixture: ComponentFixture<NgxLoadingPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoadingPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
