import { FormLayout } from './form-layout.model';

export interface FormTemplate {
  id?: string;
  name?: string;
  description?: string;
  version?: number;
  layouts?: FormLayout[]
}