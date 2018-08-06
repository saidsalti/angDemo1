import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [
  {
    path: 'material',
    component: MaterialComponent
  },
  {path:'',redirectTo:'material'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
