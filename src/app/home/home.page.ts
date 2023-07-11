import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dateTime:any;
  today:any;
  mytime:any;
  hours:any;
  minutes:any;
  strTime:any;
  seconds:any;
  milliseconds:any;

  

  constructor() {
    
    
  }

  ngOnInit(){
    this.updateClock();
   
  }


  updateClock(){
    this.mytime = new Date();

    this.hours = this.mytime.getHours();
    this.minutes = this.mytime.getMinutes();
    this.seconds = this.mytime.getSeconds();
    this.milliseconds = this.mytime.getMilliseconds();

    var month = this.mytime.toLocaleString('default' , {month: 'long'});

    var time = this.hours + ':' + (this.minutes < 10 ? '0' : ' ') + this.minutes + ':' + (this.seconds < 10 ? '0' : ' ') + this.seconds;

    var date = month + ' ' + this.mytime.getDate() + ' ' + this.mytime.getFullYear();

   
    var datetimex = date + ' ' + time;

    var datex =  document.getElementById('datetime');
    datex!.innerHTML = datetimex;

    setInterval(this.updateClock, 1); 
  }


  
  


}
