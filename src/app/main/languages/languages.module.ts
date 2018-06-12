
import {NgModule} from '@angular/core';
import {LanguagesComponent} from "./languages.component";
import {ManageLanguagesComponent} from './manage-languages/manage-languages.component';
import {AddLanguageComponent} from './add-language/add-language.component';
import {routing} from './languages.routing';
@NgModule({
  imports: [routing],
  declarations: [LanguagesComponent, ManageLanguagesComponent, AddLanguageComponent]
})
export class LanguagesModule {
}

