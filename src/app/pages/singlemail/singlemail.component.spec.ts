import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemailComponent } from './singlemail.component';

describe('SinglemailComponent', () => {
  let component: SinglemailComponent;
  let fixture: ComponentFixture<SinglemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
