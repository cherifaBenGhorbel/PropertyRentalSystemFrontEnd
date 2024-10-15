import { Component, OnInit } from '@angular/core';
import { House } from '../model/house.model';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html'
})
export class HousesComponent implements OnInit{
  houses? : House[]; 
  
  constructor(private houseService : HouseService) { 

  }

  ngOnInit(): void {
    this.houses = this.houseService.listHouse();
  }

  delete_House(house:House){
    console.log(house);
    let conf = confirm("Are You sur ?");
    if(conf){
      this.houseService.deleteHouse(house);
    }
  }
}
