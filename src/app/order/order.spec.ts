import { describe, test, expect } from 'vitest';
import { Product } from '../product/product';
import { Order } from './order';

describe('Test Order', () => {
  test('It must create an order with 3 products (with description, price and amount) and calculate the total order price', () => {
    const shipping = 19.9;
    const taxes = 13.9;
    const order = new Order('', [], shipping, taxes);

    const keyboard = new Product('Keyboard', 'TKL RGB Keyboard', 299.99, 1);
    const mouse = new Product('Mouse', 'Wireless Mouose', 199.99, 1);
    const monitor = new Product('Monitor', 'Full HD Monitor', 1199.99, 1);

    order.addProduct(keyboard);
    order.addProduct(mouse);
    order.addProduct(monitor);

    expect(order.products.length).toBe(3);
    expect(order.calculateOrderPrice()).toBe(
      keyboard.price + mouse.price + monitor.price + shipping + taxes
    );
  });
});
