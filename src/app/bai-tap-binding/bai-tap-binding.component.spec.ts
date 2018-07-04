import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapBindingComponent } from './bai-tap-binding.component';

describe('BaiTapBindingComponent', () => {
  let component: BaiTapBindingComponent;
  let fixture: ComponentFixture<BaiTapBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
