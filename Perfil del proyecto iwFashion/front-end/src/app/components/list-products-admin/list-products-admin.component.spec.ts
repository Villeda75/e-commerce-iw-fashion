import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsAdminComponent } from './list-products-admin.component';

describe('ListProductsAdminComponent', () => {
  let component: ListProductsAdminComponent;
  let fixture: ComponentFixture<ListProductsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
