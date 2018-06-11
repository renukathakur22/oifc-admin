/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ScreensComponent} from "./screens.component";
import {ScreensManageComponent} from "./manage/manage.component";

export const routes: Routes = [
  {
    path: '', component: ScreensComponent,
    children: [
      {path: '', redirectTo: '/main/screens/manage', pathMatch: 'full'},
      {
        path: "manage",
        component: ScreensManageComponent
      },
    ]

  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
