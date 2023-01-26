import { CpfValidator } from '../../helpers/cpf-validator';
import { Product } from '../product/product';
import { User } from '../user/user';
import { OrderException } from './ errors/errors';

export class Order {
  constructor(
    public user: User,
    public products: Product[],
    public shipping: number,
    public taxes: number,
    public discount: number = 0
  ) {
    if (!CpfValidator.validate(user.cpf)) {
      throw new OrderException(
        'Can not create and order with a user with invalid cpf'
      );
    }
  }

  addProduct(product: Product): Product[] {
    this.products.push(product);
    this.calculateOrderPrice();
    return this.products;
  }

  calculateOrderPrice(): number {
    const totalOfProducts = this.products.reduce(
      (acc, product) => product.price + acc,
      0
    );

    const totalOrder = totalOfProducts + this.taxes + this.shipping;
    if (this.discount !== null && this.discount > 0) {
      return totalOrder - this.discount;
    }

    return totalOrder;
  }
}
