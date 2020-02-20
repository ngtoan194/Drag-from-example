import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './containers/templates/templates.component';
import { TemplateComponent } from './containers/template/template.component';


const ROUTERS: Routes = [
  {
    path: '', component: TemplatesComponent
  },
  {
    path: 'create', component: TemplateComponent
  },
  {
    path: ':formTemplateId', component: TemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class FormTemplateRoutingModule { }
