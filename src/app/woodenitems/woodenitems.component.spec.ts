import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenitemsComponent } from './woodenitems.component';

describe('WoodenitemsComponent', () => {
  let component: WoodenitemsComponent;
  let fixture: ComponentFixture<WoodenitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
