import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormCreate } from './posts/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormService } from './form-service/form.service';
import { FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@NgModule({
  declarations: [
    AppComponent,
    FormCreate,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
