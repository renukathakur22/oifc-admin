/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {MainComponent} from "./main.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: '', redirectTo: '/main/users', pathMatch: 'full'},
      {path: 'users', loadChildren: './users/users.module#UsersModule'},
      {path: 'languages', loadChildren: './languages/languages.module#LanguagesModule'},
      {path: 'screens', loadChildren: './screens/screens.module#ScreensModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
