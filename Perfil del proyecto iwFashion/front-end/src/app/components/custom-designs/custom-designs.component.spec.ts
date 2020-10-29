import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDesignsComponent } from './custom-designs.component';

describe('CustomDesignsComponent', () => {
  let component: CustomDesignsComponent;
  let fixture: ComponentFixture<CustomDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
