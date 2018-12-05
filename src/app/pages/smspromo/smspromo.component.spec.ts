import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmspromoComponent } from './smspromo.component';

describe('SmspromoComponent', () => {
  let component: SmspromoComponent;
  let fixture: ComponentFixture<SmspromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmspromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmspromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
