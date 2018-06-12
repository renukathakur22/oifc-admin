/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */

import {NgModule} from '@angular/core';
import {UsersComponent} from "./users.component";
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {routing} from './users.routing';
@NgModule({
  imports: [routing],
  declarations: [UsersComponent, ManageUsersComponent, AddUserComponent]
})
export class UsersModule {
}
