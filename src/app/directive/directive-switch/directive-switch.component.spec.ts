import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSwitchComponent } from './directive-switch.component';

describe('DirectiveSwitchComponent', () => {
  let component: DirectiveSwitchComponent;
  let fixture: ComponentFixture<DirectiveSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
