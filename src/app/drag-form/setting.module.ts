import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';



@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
