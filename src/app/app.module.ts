import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { FormCreate } from './posts/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';


import { TicketComponent } from './posts/ticket/ticket.component';

const appRoute : Route[]= [
  {path:'form', component: FormCreate},
  {path:'ticket', component: TicketComponent},
  {path: '',redirectTo:'form', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    FormCreate,
    TicketComponent

  ],
  imports: [
    RouterModule.forRoot(appRoute),
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
