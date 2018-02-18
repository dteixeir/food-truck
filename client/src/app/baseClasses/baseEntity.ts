import { Guid } from 'guid-typescript';
import { MomentModule } from 'angular2-moment/moment.module';

export interface IBaseEntity {
  id: number;

  createdBy: string;
  createdDate: Date;

  updatedBy: string;
  updatedDate: Date;
}

export class BaseEntity {
  constructor() {
    this.id = Guid.create().toString();
  }

  id: string;

  createdBy: string | null = null;
  createdDate: Date | null = null;

  updatedBy: string | null = null;
  updatedDate: Date | null = null;
}
