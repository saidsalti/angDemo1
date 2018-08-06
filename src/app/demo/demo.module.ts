import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MaterialComponent } from './material/material.component';
import {ButtonsComponent} from './buttons/buttons.component'
import { MaterilModule } from '../shared/materil/materil.module';
@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterilModule

  ],
  declarations: [MaterialComponent, ButtonsComponent]
})
export class DemoModule { }
