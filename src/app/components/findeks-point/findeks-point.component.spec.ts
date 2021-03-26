import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindeksPointComponent } from './findeks-point.component';

describe('FindeksPointComponent', () => {
  let component: FindeksPointComponent;
  let fixture: ComponentFixture<FindeksPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindeksPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindeksPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
