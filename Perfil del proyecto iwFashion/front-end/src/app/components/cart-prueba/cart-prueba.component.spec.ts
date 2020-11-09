import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPruebaComponent } from './cart-prueba.component';

describe('CartPruebaComponent', () => {
  let component: CartPruebaComponent;
  let fixture: ComponentFixture<CartPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
