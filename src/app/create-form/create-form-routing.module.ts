import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './page/create-form.component';


const ROUTERS: Routes = [
  {
    path: '', component: CreateFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class CreateFormRoutingModule { }
