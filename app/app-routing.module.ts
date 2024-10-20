import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHouseComponent } from './add-house/add-house.component';
import { HousesComponent } from './houses/houses.component';
import { UpdateHouseComponent } from './update-house/update-house.component';
import { SearchByOwnerComponent } from './search-by-owner/search-by-owner.component';
import { SearchByAddressComponent } from './search-by-address/search-by-address.component';
import { ListeOwnersComponent } from './liste-owners/liste-owners.component';

const routes: Routes = [
  {path: "houses" , component : HousesComponent},
  {path: "add-house" , component : AddHouseComponent},
  {path: "updateHouse/:id" , component : UpdateHouseComponent},
  {path: "searchByOwner" , component : SearchByOwnerComponent},
  {path: "searchByAddress" , component : SearchByAddressComponent},
  {path: "ownersList" , component : ListeOwnersComponent},
  {path: "" , redirectTo: "houses" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
