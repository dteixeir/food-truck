import { BaseEntity } from '../baseClasses';

export class Hero extends BaseEntity {
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
