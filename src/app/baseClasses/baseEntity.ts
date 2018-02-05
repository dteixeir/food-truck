export interface IBaseEntity {
  id: number;

  createdBy: string;
  createdDate: Date;

  updatedBy: string;
  updatedDate: Date;
}

export class BaseEntity {
  constructor(id: number) {
    this.id = id;
  }

  id: number;

  createdBy: string | null = null;
  createdDate: Date | null = null;

  updatedBy: string | null = null;
  updatedDate: Date | null = null;
}
