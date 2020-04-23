import * as uuid from 'uuid';

export class FormTableData {
  id?: string;
  uId?: string;
  data?: any;

  constructor(options: {
    data: any,
  }) {
    this.uId = uuid.v4();
    this.data = options.data;
  }
}