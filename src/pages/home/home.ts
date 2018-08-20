import { ImagesPage } from './../images/images';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

courses:any;
arrCourses=[];
arrlessons=[];
lessons:any;
  constructor(public navCtrl: NavController,private service:ServiceProvider) {

   service.getCourses().subscribe(results=>{
    console.log("response",results)
    this.courses = results;
    this.arrCourses=this.courses.courses
console.log("response",this.courses)
})
 
}
getImages(lessons:any){
  this.navCtrl.push(ImagesPage,{data:lessons});
}
}
