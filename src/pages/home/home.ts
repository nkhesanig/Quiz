import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name;
  app:boolean =false;
  music: boolean =false;
  computer:boolean =false;
  general:boolean =false;
  scores:boolean=false;
  startagain:boolean=false;

  score=0;

  image; 
  audio;
  office;
  serial;
  unlimitted;
   mb;
   kb;
   tru;
   fal;
   analyst;
   programmer;
   non;
  
truu;
fals;
cup;
oly;
ser;
kenya;
zim;
rain;
mbeki;
mandela;
zuma;
how;
many;
lang;

ele;
phant;
dol;
phin;
sna;
kes;
gira;
ffe;
lio;
one;
  


  constructor(public navCtrl: NavController) {

    this.app =true;

  }


  clicks(){
    this.app =false;
    this.computer=true;
  }

  clickn(){
    this.computer =false;
    this.music=true;


  }

  clicknn(){

    this.music = false
    this.general = true;



  }

  clic(){
    this.general=false;
    this.scores=true;
   
      if(this.image == true){
      this.score = this.score +=1
    }

    if(this.serial == true){
      this.score = this.score +=1
    }

    if(this.mb== true){
      this.score = this.score +=1
    }

    if(this.tru == true){
      this.score = this.score +=1
    }

    if(this.programmer == true){
      this.score = this.score +=1
    }




    if(this.fals == true){
      this.score = this.score +=1
    }

    if(this.cup == true){
      this.score = this.score +=1
    }

    if(this.rain== true){
      this.score = this.score +=1
    }

    if(this.mandela== true){
      this.score = this.score +=1
    }

    if(this.lang == true){
      this.score = this.score +=1
    }





    if(this.ele == true){
      this.score = this.score +=1
    }

    if(this.dol == true){
      this.score = this.score +=1
    }

    if(this.kes== true){
      this.score = this.score +=1
    }

    if(this.gira== true){
      this.score = this.score +=1
    }

    if(this.lio== true){
      this.score = this.score +=1
    }
  }
    clica(){

      this.scores = false;
      this.computer = true;
  
  
  
    }
    
  }

