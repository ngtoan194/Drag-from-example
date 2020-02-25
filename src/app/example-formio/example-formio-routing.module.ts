import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { ExampleFormioComponent } from './page/example-formio.component';


const ROUTERS: Routes = [
  {
    path: '', component: ExampleFormioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class ExampleFormioRoutingModule { }
