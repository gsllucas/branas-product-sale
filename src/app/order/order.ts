import { Product } from '../product/product';
import { OrderException } from './ errors/errors';

export class Order {
  constructor(
    public cpf: string,
    public products: Product[],
    public shipping: number,
    public taxes: number,
    public discount: number = 0
  ) {
    if (!this.validateCpf()) {
      throw new OrderException('Invalid CPF, please enter a valid one');
    }
  }

  validateCpf(): boolean {
    return true;
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
