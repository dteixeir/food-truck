import { BaseEntity } from '../baseClasses';

export class Login extends BaseEntity {
  email: string;
  password: string;
}
