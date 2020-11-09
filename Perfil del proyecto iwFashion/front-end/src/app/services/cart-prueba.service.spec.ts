import { TestBed } from '@angular/core/testing';

import { CartPruebaService } from './cart-prueba.service';

describe('CartPruebaService', () => {
  let service: CartPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
