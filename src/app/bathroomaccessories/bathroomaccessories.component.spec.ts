import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomaccessoriesComponent } from './bathroomaccessories.component';

describe('BathroomaccessoriesComponent', () => {
  let component: BathroomaccessoriesComponent;
  let fixture: ComponentFixture<BathroomaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
