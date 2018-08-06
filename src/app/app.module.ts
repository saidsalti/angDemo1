import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterilModule } from './shared/materil/materil.module';


const routes:Routes=[
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterilModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
