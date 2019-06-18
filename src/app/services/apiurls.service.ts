import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlsService {

  environment: any = "json";

  serviceUrls: any;
  constructor() { 
    this.serviceUrls = {
      'login': 'assets/jsons/login.json'
    }
  }


}
