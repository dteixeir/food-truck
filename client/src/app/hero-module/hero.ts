import { BaseEntity } from '../baseClasses';

export class Hero extends BaseEntity {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
