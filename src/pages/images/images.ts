
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {
  course:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:ServiceProvider) {
    this.course=this.navParams.get('data');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');
  }
getImages(){
  this.service.getCourses().subscribe(data=>{
  })


}
}

