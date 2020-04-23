import * as uuid from 'uuid';

export class FormTableColumn {
  id?: string;
  uId?: string;
  columnName?: string;
  columnKey?: string;

  constructor(options: {
    columnName: string,
    columnKey: string,
  }) {
    this.uId = uuid.v4();
    this.columnName = options.columnName;
    this.columnKey = options.columnKey;
  }
}