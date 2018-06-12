/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LanguagesComponent} from "./languages.component";
import {ManageLanguagesComponent} from "./manage-languages/manage-languages.component";
import {AddLanguageComponent} from "./add-language/add-language.component";

export const routes: Routes = [
  {
    path: '', component: LanguagesComponent,
    children: [
      {path: '', redirectTo: '/main/languages/manage', pathMatch: 'full'},
      {
        path: "manage",
        component: ManageLanguagesComponent,
        data: {title: "Languages | Manage Languages"}
      },
      {
        path: "add",
        component: AddLanguageComponent,
        data: {title: "Languages | Add Language"}
      },
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

