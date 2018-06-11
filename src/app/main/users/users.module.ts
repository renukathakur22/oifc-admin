/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
// import {NgModule} from '@angular/core';
// import {UsersComponent} from './users.component';
// import {UsersManageComponent} from './manage/manage.component';
// import {routing} from './users.routing';
// @NgModule({
//   imports: [routing],
//   declarations: [UsersComponent, UsersManageComponent]
// })
// export class UsersModule {
// }

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule  } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const router:Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(router),
    ReactiveFormsModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule {
}

