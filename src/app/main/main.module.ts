/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./main.routing";
import { RouterTestingModule } from '@angular/router/testing';
import {MainComponent} from "./main.component";
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    RouterTestingModule
  ],
  declarations: [MainComponent,SidebarComponent,HeaderComponent],
})

export class MainModule { }
