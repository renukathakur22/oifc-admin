/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LanguagesComponent} from "./languages.component";
import {ManageLanguagesComponent} from "./manage-languages/manage-languages.component";

export const routes: Routes = [
  {
    path: '', component: LanguagesComponent,
    children: [
      {path: '', redirectTo: '/main/languages/manage', pathMatch: 'full'},
      {
        path: "manage",
        component: ManageLanguagesComponent
      },
    ]

  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
