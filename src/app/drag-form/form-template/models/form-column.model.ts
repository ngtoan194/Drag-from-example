import { FormControlItem } from './form-control-item.model';
import * as uuid from 'uuid';

export class FormColumn {
  id?: string;
  uId?: string;
  name?: string;
  type?: string;
  table?: any;
  panel?: any;
  control?: FormControlItem;
  tab?: any;

  constructor(options: {
      name: string,
      type: string;
  }) {
      this.name = options.name;
      this.type = options.type;
      this.uId = uuid.v4();
      this.table = null;
      this.panel = null;
      this.tab = null;
      this.control = null;
  }
}