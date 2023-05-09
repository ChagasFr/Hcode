import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiltesComponent } from './list-tiltes.component';

describe('ListTiltesComponent', () => {
  let component: ListTiltesComponent;
  let fixture: ComponentFixture<ListTiltesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTiltesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTiltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
