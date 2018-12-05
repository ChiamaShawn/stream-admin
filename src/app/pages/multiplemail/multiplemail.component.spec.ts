import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplemailComponent } from './multiplemail.component';

describe('MultiplemailComponent', () => {
  let component: MultiplemailComponent;
  let fixture: ComponentFixture<MultiplemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
