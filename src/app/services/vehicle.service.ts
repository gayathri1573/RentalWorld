import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles:vehicle[]=[
      // Cars
      {
        vehicleId:1,
        vehicleName: "Swift",
        vehicleCompany: "Maruti Suzuki",
        vehiclePrice: 6000,
        availableTime: "9:00 AM - 6:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "https://stimg.cardekho.com/images/car-images/360x240/Maruti/Swift/11709/1715245881325/226_Metallic-Sizzling-Red_ad0001.jpg?imwidth=480&impolicy=resize",
        rating: 4.5,
        vehicleDescription:""
       
      },
      {
        vehicleId: 2,
        vehicleName: "City",
        vehicleCompany: "Honda",
        vehiclePrice: 5000,
        availableTime: "8:00 AM - 5:00 PM",
        fuelType: "Diesel",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City-Hybrid-2023/9713/1677745369245/front-left-side-47.jpg",
        rating: 4.7,
        vehicleDescription:""
      },
      {
        vehicleId: 3,
        vehicleName: "Creta",
        vehicleCompany: "Hyundai",
        vehiclePrice: 8000,
        availableTime: "7:00 AM - 7:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 7,
        vehicleType: "Car",
        vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        rating: 4.6,
        vehicleDescription:""
      },
      {
        vehicleId: 4,
        vehicleName: "Fortuner",
        vehicleCompany: "Toyota",
        vehiclePrice: 3000,
        availableTime: "9:00 AM - 8:00 PM",
        fuelType: "Diesel",
        seatingCapacity: 7,
        vehicleType: "Car",
        vehicleImage: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F4%2F3212781%2FToyota_Fortuner_01da689c70.jpg&w=640&q=75",
        rating: 4.8,
        vehicleDescription:""
      },
      {
        vehicleId: 5,
        vehicleName: "Kwid",
        vehicleCompany: "Renault",
        vehiclePrice: 5000,
        availableTime: "8:00 AM - 6:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "https://static.langimg.com/photo/imgsize-122992,msid-85887858/navbharat-times.jpg",
        rating: 4.3,
        vehicleDescription:""
      },
      {
        vehicleId: 6,
        vehicleName: "Thar",
        vehicleCompany: "Mahindra",
        vehiclePrice: 4500,
        availableTime: "10:00 AM - 5:00 PM",
        fuelType: "Diesel",
        seatingCapacity: 5,
        vehicleType: "Car",
        vehicleImage: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg",
        rating: 4.9,
        vehicleDescription:""
      },
    
      // Bikes
      {
        vehicleId: 7,
        vehicleName: "Splendor Plus",
        vehicleCompany: "Hero",
        vehiclePrice: 700,
        availableTime: "7:00 AM - 9:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLqcsF-hkzVWLRhVGE33BUZr3Gs-1d0WN4HE2jvLceF6stjDJz_xi1oL8XoUcYQHTRuv3DrMKkkgeln584HILL-3WkTx8EbWv7qdR1yYpnWW-gW5h1HXOzvw",
        rating: 4.2,
        vehicleDescription:"Highly fuel efficient	Dated design Reliable engine	No disc brakesLow seat height and weight	Low on features"
      },
      {
        vehicleId: 8,
        vehicleName: "Pulsar 150",
        vehicleCompany: "Bajaj",
        vehiclePrice: 900,
        availableTime: "6:00 AM - 10:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/pulsar-150-2024/360-degree/single-disc/red/00.png",
        rating: 4.5,
        vehicleDescription:""
      },
      {
        vehicleId: 9,
        vehicleName: "FZ S V3",
        vehicleCompany: "Yamaha",
        vehiclePrice: 1100,
        availableTime: "8:00 AM - 8:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://shop.yamaha-motor-india.com/cdn/shop/products/RACINGBLUE_840d4994-dab9-42d8-99a5-2dd7467a580c_1000x.webp?v=1680862171",
        rating: 4.6,
        vehicleDescription:""
      },
      {
        vehicleId: 10,
        vehicleName: "Duke 250",
        vehicleCompany: "KTM",
        vehiclePrice: 2000,
        availableTime: "9:00 AM - 6:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://imgd.aeplcdn.com/1056x594/n/vmuuteb_1778337.jpg?q=80",
        rating: 4.7,
        vehicleDescription:""
      },
      {
        vehicleId: 11,
        vehicleName: "Bullet 350",
        vehicleCompany: "Royal Enfield",
        vehiclePrice: 1600,
        availableTime: "10:00 AM - 7:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80",
        rating: 4.8,
        vehicleDescription:""
      },
      {
        vehicleId: 12,
        vehicleName: "Apache RTR 160",
        vehicleCompany: "TVS",
        vehiclePrice: 2000,
        availableTime: "8:00 AM - 6:00 PM",
        fuelType: "Petrol",
        seatingCapacity: 2,
        vehicleType: "Bike",
        vehicleImage: "https://5.imimg.com/data5/HP/GD/GLADMIN-70859849/tvs-apache-rtr-160-bike-250x250.png",
        rating: 4.4,
        vehicleDescription:""
      },
    ];
  


  

  constructor() { }
  getAllVehicles(){
    return of(this.vehicles);
   
  }
  getVehicleById(id:any){
    return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
  }
  addvehicle(newveh:any){
    this.vehicles.push(newveh);
    return "vehicle added successfully"

  }
  updatevehicle(id:any,newveh:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
    if(index!=-1){
      this.vehicles.splice(index,1,newveh);
    }
    return "updated";
  }
  deletevehicle(id:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId);
    this.vehicles.splice(index,1);
    return "deleted";
  }
  getBikes(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Bike"));
  }
  getCars(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=='Car'));
  }
}
