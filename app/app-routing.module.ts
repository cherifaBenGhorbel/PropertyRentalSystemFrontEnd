import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHouseComponent } from './add-house/add-house.component';
import { HousesComponent } from './houses/houses.component';
import { UpdateHouseComponent } from './update-house/update-house.component';

const routes: Routes = [
  {path: "houses" , component : HousesComponent},
  {path: "add-house" , component : AddHouseComponent},
  {path: "updateHouse/:id" , component : UpdateHouseComponent},
  {path: "" , redirectTo: "houses" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
