import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { FormsModule } from '@angular/forms';
import { UpdateHouseComponent } from './update-house/update-house.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    AddHouseComponent,
    UpdateHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
