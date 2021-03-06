import { BaseEntity } from '../baseClasses';

export class FoodTruck extends BaseEntity {
  name: string;
  description: string;
  website: string;

  constructor(name: string, description: string, website: string) {
    super();

    this.name = name;
    this.description = description;
    this.website = website;
  }
}
