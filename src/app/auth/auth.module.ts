/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./auth.routing";
import {AuthComponent} from "./auth.component";
// import {LoginModule} from "./login/login.module";

@NgModule({
  imports: [
    CommonModule,
    routing
    // LoginModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
