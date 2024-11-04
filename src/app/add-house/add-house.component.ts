import { Component, OnInit } from '@angular/core';
import { House } from '../model/house.model';
import { HouseService } from '../services/house.service';
import { Owner } from '../model/owner.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html'
})
export class AddHouseComponent implements OnInit {

  newHouse = new House();

  message!: string;
  owners!: Owner[];
  newIdOwner!: number;
  newOwner!: Owner;

  constructor(private houseService: HouseService, private router: Router) {

  }

  ngOnInit(): void {
    this.houseService.listeOwners().subscribe(owns => {
      this.owners = owns._embedded.owners;
      console.log(owns);
    })

    //this.owners = this.houseService.listeOwners();
  }

  add_House() {
    this.newHouse.owner = this.owners.find(own => own.idOwner == this.newIdOwner)!;
    this.houseService.addHouse(this.newHouse)
      .subscribe(hows => {
        this.message = "House added";
        console.log(hows);
      });
    this.router.navigate(['houses']);



    /*   console.log(this.newIdOwner);
        //this.newOwner = this.houseService.consulteOwner(this.newIdOwner);
        this.newHouse.owner = this.newOwner;
        this.houseService.addHouse(this.newHouse);
        this.message = "House  " + this.newHouse.idHouse + "added succefully";
        this.router.navigate(["houses"]); */

  }
}