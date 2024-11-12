import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:any[]=[];
  constructor() { }
 
  getvehicles(){
    return of(this.wishlist);
  }
  addtowishlist(newvehicle:any){
    this.wishlist.push(newvehicle);
    alert ("added susscessfully")
  }

  getLengthofwishlist(){
    return this.wishlist.length;
  }

}
