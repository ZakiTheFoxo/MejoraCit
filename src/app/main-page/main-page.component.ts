import { Component, OnInit } from '@angular/core';

import { reportes } from '../reportes';
// import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  reportes = reportes;

  constructor() { }

  ngOnInit(): void {

  }
  // Esta funcion es para obtener la geolocalizacion del usuario
  // api_key = '41b8410e4a384faf8f38f6a1bb29162b';
  // url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;

  // ipAddress = "";

  // city = "";

  // region = "";

  // country = "";

  // constructor(private http:HttpClient) { }

  // ngOnInit() {
  //   this.getGeolocationData();
  // }

  // getGeolocationData() {
  //   this.http.get(this.url).subscribe((res:any)=>{
  //     this.ipAddress = res.ip_address;
  //     this.city = res.city;
  //     this.region = res.region;
  //     this.country = res.country;
  //   });
  // }
}
