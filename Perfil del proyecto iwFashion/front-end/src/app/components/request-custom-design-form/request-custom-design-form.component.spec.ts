import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCustomDesignFormComponent } from './request-custom-design-form.component';

describe('RequestCustomDesignFormComponent', () => {
  let component: RequestCustomDesignFormComponent;
  let fixture: ComponentFixture<RequestCustomDesignFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCustomDesignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCustomDesignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
