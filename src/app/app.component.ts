import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  vinNumber = '';
  carMake='';
  carYear='';
  carRandVinNumber:any;
  carVin='';
  myvin:any;
  randVinNumber = [];

  constructor(private http:Http) {}


  
  searchVin(){
    this.http.get('http://localhost:8080/api/vehicle/'+this.vinNumber)
    .subscribe(
         (res:Response) => {
          const vehicleRetrieved = res.json();
          console.log(vehicleRetrieved);
          this.carMake=vehicleRetrieved.make;
          this.carYear=vehicleRetrieved.year;
          this.carVin=vehicleRetrieved.vin;
      }
    )
  }

  randomVin() {
    this.http.get('http://localhost:8080/api/vehicle')
    .subscribe(
    (res:Response) => {
      this.randVinNumber = res.json();
      console.log(this.randVinNumber);
      });


      // let vinVal = this.randVinNumber;
      // const randVinNumber = Math.floor(Math.random()*randVinRetrieval.vin);
      // let randVinNumber = 
      // console.log(randVinNumber);
      // console.log(randVinRetrieval);    
      // this.carRandVinNumber=randVinNumber;
      }
     }
