
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {ScreensComponent} from "./screens.component";
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule  } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const router:Routes = [
  {path: '', component: ScreensComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(router),
    ReactiveFormsModule
  ],
  declarations: [ScreensComponent]
})
export class ScreensModule {
}

