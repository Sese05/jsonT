import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  url="assets/codetribe.json";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
getCourses(){
  return this.http.get(this.url)
  
}
getImages(){
  return this.http.get(this.url)
}
}
