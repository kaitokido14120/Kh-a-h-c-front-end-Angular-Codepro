import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIfElseComponent } from './directive-if-else.component';

describe('DirectiveIfElseComponent', () => {
  let component: DirectiveIfElseComponent;
  let fixture: ComponentFixture<DirectiveIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
