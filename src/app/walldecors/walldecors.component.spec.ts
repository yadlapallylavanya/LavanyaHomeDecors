import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalldecorsComponent } from './walldecors.component';

describe('WalldecorsComponent', () => {
  let component: WalldecorsComponent;
  let fixture: ComponentFixture<WalldecorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalldecorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalldecorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
