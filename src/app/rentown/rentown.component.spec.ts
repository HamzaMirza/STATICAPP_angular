import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentownComponent } from './rentown.component';

describe('RentownComponent', () => {
  let component: RentownComponent;
  let fixture: ComponentFixture<RentownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
