import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrClassComponent } from './attr-class.component';

describe('AttrClassComponent', () => {
  let component: AttrClassComponent;
  let fixture: ComponentFixture<AttrClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
