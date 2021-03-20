import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTableComponent } from './fill-table.component';

describe('FillTableComponent', () => {
  let component: FillTableComponent;
  let fixture: ComponentFixture<FillTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
