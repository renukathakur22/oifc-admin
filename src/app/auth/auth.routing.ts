/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {AuthComponent} from "./auth.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      {path: 'login', loadChildren: './login/login.module#LoginModule', data:{title:"Login"}}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
