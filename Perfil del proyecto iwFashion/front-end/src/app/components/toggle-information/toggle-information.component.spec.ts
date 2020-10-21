import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleInformationComponent } from './toggle-information.component';

describe('ToggleInformationComponent', () => {
  let component: ToggleInformationComponent;
  let fixture: ComponentFixture<ToggleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
