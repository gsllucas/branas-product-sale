import { describe, test, expect } from 'vitest';
import { Product } from '../product/product';
import { User } from '../user/user';
import { Order } from './order';

describe('Test Order', () => {
  const user = new User('1', 'Lucas', '000.111.222-33');
  const shipping = 19.9;
  const taxes = 13.9;
  const coupon = 100;

  const keyboard = new Product('Keyboard', 'TKL RGB Keyboard', 299.99, 1);
  const mouse = new Product('Mouse', 'Wireless Mouose', 199.99, 1);
  const monitor = new Product('Monitor', 'Full HD Monitor', 1199.99, 1);

  test('It must create an order with 3 products (with description, price and amount) and calculate the total order price', () => {
    const order = new Order(user, [], shipping, taxes);

    order.addProduct(keyboard);
    order.addProduct(mouse);
    order.addProduct(monitor);

    expect(order.products.length).toBe(3);
    expect(order.calculateOrderPrice()).toBe(
      keyboard.price + mouse.price + monitor.price + shipping + taxes
    );
  });

  test('It should create an order with 3 products, associate a coupon and calculate the total (percentual of the total of the order)', () => {
    const order = new Order(user, [], shipping, taxes, coupon);

    order.addProduct(keyboard);
    order.addProduct(mouse);
    order.addProduct(monitor);

    expect(order.discount).toBe(coupon);
    expect(order.products.length).toBe(3);

    const totalWithCoupon =
      keyboard.price + mouse.price + monitor.price + shipping + taxes - coupon;

    expect(order.calculateOrderPrice()).toBe(totalWithCoupon);
  });

  test('It should not create an order with an user with invalid CPF', () => {
    expect(() => {
      const user = new User('1', 'Lucas', '000.111.222-33');
      user.cpf = '000.111.222-33-33-33-33';
      new Order(user, [], shipping, taxes, coupon);
    }).toThrowError('Can not create and order with a user with invalid cpf');
  });
});
