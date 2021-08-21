import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationitemsComponent } from './decorationitems.component';

describe('DecorationitemsComponent', () => {
  let component: DecorationitemsComponent;
  let fixture: ComponentFixture<DecorationitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
