import { FormLayout } from './form-layout.model';
import * as uuid from 'uuid';

export class FormTabItem {
  id?: string;
  uId?: string;
  title?: string;
  displayOrder?: number;
  layouts?: FormLayout[];

  constructor(options: {
    title: string,
    displayOrder: number
  }) {
    this.uId = uuid.v4();
    this.title = options.title;
    this.displayOrder = options.displayOrder;
    this.layouts = [];
  }
}