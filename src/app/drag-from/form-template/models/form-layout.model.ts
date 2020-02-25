import { FormColumn } from './form-col.model';

export interface FormLayout {
  layoutId?: number;
  layoutType?: string;
  cols?: FormColumn[]
}