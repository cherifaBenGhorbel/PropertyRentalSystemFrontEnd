import { Component, OnInit } from '@angular/core';
import { House } from '../model/house.model';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html'
})
export class AddHouseComponent implements OnInit {

  newHouse = new House();

  message :string = "";
  
  constructor(private houseService : HouseService) {

   }

  ngOnInit(): void {
      
  }

  add_House(){
    //console.log(this.newHouse);
    this.houseService.addHouse(this.newHouse);
    this.message = "House  " + this.newHouse.idHouse + "added succefully";

  }
}
