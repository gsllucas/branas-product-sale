import { CpfValidator } from '../../helpers/cpf-validator';
import { UserError } from './errors/error';

export class User {
  constructor(public id: string, public name: string, private _cpf: string) {
    if (!CpfValidator.validate(this.cpf)) {
      throw new UserError('Please, insert a valid CPF');
    }
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get cpf() {
    return this._cpf;
  }
}
