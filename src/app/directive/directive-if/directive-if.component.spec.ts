import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIfComponent } from './directive-if.component';

describe('DirectiveIfComponent', () => {
  let component: DirectiveIfComponent;
  let fixture: ComponentFixture<DirectiveIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
