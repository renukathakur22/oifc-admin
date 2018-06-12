/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ScreensComponent} from "./screens.component";
import {ManageScreensComponent} from "./manage-screens/manage-screens.component";
import {AddScreenComponent} from "./add-screen/add-screen.component";

export const routes: Routes = [
  {
    path: '', component: ScreensComponent,
    children: [
      {path: '', redirectTo: '/main/screens/manage', pathMatch: 'full'},
      {
        path: "manage",
        component: ManageScreensComponent,
        data: {title: "Screens | Manage Screens"}
      },
      {
        path: "add",
        component: AddScreenComponent,
        data: {title: "Screens | Add Screen"}
      },
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
