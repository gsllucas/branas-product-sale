import { ProductException } from '../errors/errors';

export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public amount: number
  ) {
    if (amount <= 0) {
      throw new ProductException('It is necessary at least one product amount');
    }

    if (!name || !description || !price || !amount) {
      throw new ProductException('Missing product field');
    }
  }
}
