import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
vehicles:any
constructor(private wish:WishlistService){}
ngOnInit(){
  this.wish.getvehicles().subscribe((res)=>{
    this.vehicles=res;
   
    console.log(this.vehicles)
    
  })
}

}
