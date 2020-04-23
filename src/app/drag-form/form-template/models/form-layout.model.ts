import { FormColumn } from './form-column.model';
import * as uuid from 'uuid';

export class FormLayout {
  id?: string;
  uId?: string;
  name?: string;
  type?: string;
  columns?: FormColumn[];

  constructor(options: {
    id: string;
    name: string;
    type: string;
    columns: FormColumn[];
  }) {
    this.id = options.id;
    this.uId = uuid.v4();
    this.name = options.name;
    this.type = options.type;
    this.columns = options.columns;
  }
}