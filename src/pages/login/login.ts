import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

 
export class LoginPage {

  splash = true;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.onload = function(){

      myMoveRight(),
      myMoveLeft();
      
    }
  
  
  function myMoveRight() {
    var elem = document.getElementById("logo4");   
    var pos = 0;
    var idRight = setInterval(frameRight, 14);
    function frameRight() {
      if (pos >= 137) {
        clearInterval(idRight);
      }
      else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  
  
  
  function myMoveLeft() {
      var elem = document.getElementById("logo5");   
      var pos = 360;
      var idLeft = setInterval(frameLeft, 14);
      function frameLeft() {
          if (pos <= 270) {
            clearInterval(idLeft);
          }
          else {
            pos--; 
            elem.style.left = pos + 'px'; 
          }
        
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() => {
       this.splash=false;
   }, 4000);
  }

    
}
