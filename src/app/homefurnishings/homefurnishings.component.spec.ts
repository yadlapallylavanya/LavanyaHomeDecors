import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefurnishingsComponent } from './homefurnishings.component';

describe('HomefurnishingsComponent', () => {
  let component: HomefurnishingsComponent;
  let fixture: ComponentFixture<HomefurnishingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefurnishingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefurnishingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
