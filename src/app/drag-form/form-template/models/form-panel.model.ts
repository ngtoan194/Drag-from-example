import { FormLayout } from './form-layout.model';

export interface FormPanel {
  id?: string;
  name?: string;
  title?: string;
  layouts?: FormLayout[]
}