import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarComponent } from './slidebar.component';

describe('SlidebarComponent', () => {
  let component: SlidebarComponent;
  let fixture: ComponentFixture<SlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
