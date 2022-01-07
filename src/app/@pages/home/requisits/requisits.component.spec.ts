import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitsComponent } from './requisits.component';

describe('RequisitsComponent', () => {
  let component: RequisitsComponent;
  let fixture: ComponentFixture<RequisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
