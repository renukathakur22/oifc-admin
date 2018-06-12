
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScreensComponent} from "./screens.component";
import {ManageScreensComponent} from './manage-screens/manage-screens.component';
import {AddScreenComponent} from './add-screen/add-screen.component';
import {ScreenItemComponent} from './add-screen/screen-item/screen-item.component';
import {ScreenInputComponent} from './add-screen/screen-item/screen-input/screen-input.component';
import {routing} from './screens.routing';
@NgModule({
  imports: [routing, CommonModule],
  declarations: [ScreensComponent, ManageScreensComponent, AddScreenComponent, ScreenItemComponent, ScreenInputComponent]
})
export class ScreensModule {
}
