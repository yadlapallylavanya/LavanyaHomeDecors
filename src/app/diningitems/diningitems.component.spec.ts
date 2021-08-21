import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningitemsComponent } from './diningitems.component';

describe('DiningitemsComponent', () => {
  let component: DiningitemsComponent;
  let fixture: ComponentFixture<DiningitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
