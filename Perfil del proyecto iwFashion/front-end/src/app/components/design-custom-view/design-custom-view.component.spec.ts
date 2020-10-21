import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCustomViewComponent } from './design-custom-view.component';

describe('DesignCustomViewComponent', () => {
  let component: DesignCustomViewComponent;
  let fixture: ComponentFixture<DesignCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCustomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
