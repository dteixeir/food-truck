import { BaseEntity } from '../baseClasses';

export class FoodTruck extends BaseEntity {
  name: string;
  description: string;
  website: string;

  constructor(id: number, name: string, description: string, website: string) {
    super(id);

    this.name = name;
    this.description = description;
    this.website = website;
  }
}
