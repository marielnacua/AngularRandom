import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {
  
  nm:number=0;
  rndNum=0;
  in(){
      this.rndNum+=Math.floor(Math.random() * 10);
      this.nm=this.rndNum;

  }
  de(){
    this.rndNum-=Math.floor(Math.random() * 10);
      this.nm=this.rndNum;
  }

}
