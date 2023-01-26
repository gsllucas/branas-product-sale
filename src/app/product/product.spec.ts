import { test, describe, expect } from 'vitest';
import { Product } from './product';

describe('Product Entity Test', () => {
  test('It must not create a Product with amount as zero', () => {
    expect(
      () => new Product('Keyboard', 'TKL RGB Keyboard', 299.99, 0)
    ).toThrowError('It is necessary at least one product amount');
  });

  test('It must not create a Product with blank name', () => {
    expect(() => new Product('', 'TKL RGB Keyboard', 239, 20)).toThrowError(
      'Missing product field'
    );
  });

  test('It must not create a Product with blank description', () => {
    expect(() => new Product('Keyboard', '', 239, 20)).toThrowError(
      'Missing product field'
    );
  });
});
