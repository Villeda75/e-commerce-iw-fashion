import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPruebaComponent } from './products-prueba.component';

describe('ProductsPruebaComponent', () => {
  let component: ProductsPruebaComponent;
  let fixture: ComponentFixture<ProductsPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
