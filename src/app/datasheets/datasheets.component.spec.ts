import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasheetsComponent } from './datasheets.component';

describe('DatasheetsComponent', () => {
  let component: DatasheetsComponent;
  let fixture: ComponentFixture<DatasheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
