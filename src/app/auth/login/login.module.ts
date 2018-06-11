/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule  } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const router:Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(router),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
