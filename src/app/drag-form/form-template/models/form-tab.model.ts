import { FormTabItem } from './form-tab-item.model';

export interface FormTab {
  id?: string;
  name?: string;
  items?: FormTabItem[];
}