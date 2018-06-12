/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UsersComponent} from "./users.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {AddUserComponent} from "./add-user/add-user.component";

export const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {path: '', redirectTo: '/main/users/manage', pathMatch: 'full'},
      {
        path: "manage",
        component: ManageUsersComponent,
        data: {title: "User Management Service | User Management"}
      },
      {
        path: "add",
        component: AddUserComponent,
        data: {title: "User Management Service | User Management"}
      },
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

