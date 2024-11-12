import { Component, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { WishlistService } from '../../services/wishlist.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {
  vid:any;
  vehicle:any;
  orderedvehicle:any;
  uname:any;
  uaddress:any;
  utime:any;
  neworder:any;
  constructor(private route:ActivatedRoute,private service:VehicleService,private wish:WishlistService,private order:OrderService){}
  ngOnInit(){
    this.vid=this.route.snapshot.params['id'];
    if(this.vid!=null){
      this.vehicle=this.service.getVehicleById(this.vid);
    }
  }
  addtowishlist(vehicle:any){
    this.wish.addtowishlist(vehicle);

  }
  ordernow(){
    this.neworder={
      vehicleId:this.orderedvehicle.VehicleId,
      vehicleName:this.orderedvehicle.vehicleName,
      vehiclePrice:this.orderedvehicle.vehiclePrice,
      username:this.uname,
      address:this.uaddress,
      time:this.utime

    }
 
    this.order.addtoorders(this.neworder);
    alert("order placed successfully");
  }
  openmodal(vehicle:any){
    this.orderedvehicle=vehicle;
   
  }


}
