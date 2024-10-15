import { Injectable } from '@angular/core';
import { House } from '../model/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses : House[]; 
  constructor() { 
    this.houses = [
      {idHouse :1, address: "Hamamet" , rentPrice : 6250.6 ,status : "available"},
      {idHouse :2, address: "Jasmin Hamamet" , rentPrice : 245.05 ,status : "rented"},
      {idHouse :3, address: "Gabis" , rentPrice : 1579 ,status : "available"},
    ];
  }

  listHouse():House[] {
    return this.houses;
  }

  addHouse (house:House){
    this.houses.push(house);
  }

  deleteHouse(house:House){
    const index = this.houses.indexOf(house,0);
    if (index > -1) {
      this.houses.splice(index, 1);
  }

}
}