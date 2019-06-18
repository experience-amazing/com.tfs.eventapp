import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { ApiurlsService } from './apiurls.service';

import { 
  first, 
  finalize,
  map 
} from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
    private apiurlService: ApiurlsService) { }


    serviceWrapper(
      serviceURL: string,
      requestData: any,
      successHandler,
      ifGET ?,
      ifJSONPRequest? ): Subject < any > {
      
      let responseSubject = new Subject < any > ();
      
      if (!!ifGET) {
          //do a GET request          
        if(!!requestData) {
          for (let param in requestData) {
            if(serviceURL.indexOf("?") > -1) {
              serviceURL = serviceURL + "&" + param + "=" + requestData[param];
            } else {
              serviceURL = serviceURL + "?" + param + "=" + requestData[param];
            }
          }
        }
        this.http.get(
          serviceURL
          ).pipe(                    
            finalize(() => {                
            })
          ).subscribe(
          (data) => {           
            let result = successHandler(data);
            if (!!result.error) {
              responseSubject.error(result.error);
            } else {
              responseSubject.next(result.data);
            }            
          },
          (error) => {
            responseSubject.error("service failure");
          }
        );
      } else {
        this.http.post(
          serviceURL,
          requestData).pipe(
            finalize(() => {
              
            })
          ).subscribe(
          (data) => {
            let result = successHandler(data);
            if (!!result.error) {
              responseSubject.error(result.error);
            } else {
              responseSubject.next(result.data);
            }
          },
          (error) => {
            responseSubject.error("service failure");
          }
        );
      }

      //this.keepSessionAlive();
      return responseSubject;
  }
  
  
  login(data) {
    // this.showLoader("Please wait...");

    return this.serviceWrapper(
      this.apiurlService.serviceUrls.login,
      '',

      (successData) => {
        return {
          'data': successData
        }
      }, 'GET'
    );
  }


}
