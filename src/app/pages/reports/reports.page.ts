import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor() { }

  

  ngOnInit() {
  }

speed = 0;
prevSpeed = 0;
currentScale = 1;

random(){
    setTimeout(() => {
        this.increaseSpeed();
        setTimeout(() => {
        this.increaseSpeed();
        setTimeout(() => {
            this.increaseSpeed();
            setTimeout(() => {
                this.increaseSpeed();
                setTimeout(() => {
                    this.increaseSpeed();
                    setTimeout(() => {
                        this.increaseSpeed();
                        setTimeout(() => {
                            this.increaseSpeed();
                            setTimeout(() => {
                                this.increaseSpeed();
                                setTimeout(() => {
                                    this.decreaseSpeed();
                                    setTimeout(() => {
                                        this.decreaseSpeed();
                                        setTimeout(() => {
                                            this.decreaseSpeed();
                                            setTimeout(() => {
                                                this.increaseSpeed();
                                                setTimeout(() => {
                                                    this.decreaseSpeed();
                                                   }, 1000);
                                               }, 500);
                                           }, 1000);
                                       }, 1000);
                                   }, 1000);
                               }, 500);
                           }, 500);
                       }, 500);
                   }, 500);
               }, 500);
           }, 500);
       }, 500);
       }, 1000);

    
    setInterval(this.random, 1);

    
}

test(){
    this.random();
}

falter(){
    setTimeout(() => {
        this.increaseSpeed();
       }, 1000);
       setTimeout(() => {
        this.decreaseSpeed();
       }, 1000);

}

increaseSpeed() {
    if (this.speed < 180) {
        this.speed = this.speed + 10;
        this.addClass();
        this.currentScale = this.currentScale + 1;
        this.changeActive();
        this.changeText();
    }
}

decreaseSpeed() {
    if (this.speed > 0) {
        this.speed = this.speed - 10;
        this.addClass();
        this.changeActive();
        this.currentScale = this.currentScale - 1;
        this.changeText();
    }
}

addClass() {
    let newClass = "speed-" + this.speed;
    let prevClass = "speed-" + this.prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el.classList.contains(prevClass)) {
        el.classList.remove(prevClass);
        el.classList.add(newClass);
    }
    this.prevSpeed = this.speed;
}

changeActive() {
    let tempClass = "speedometer-scale-" + this.currentScale;
    let el = document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active");
}

changeText() {
    let el = document.getElementsByClassName("km")[0] as HTMLInputElement;
    let el2 = document.getElementsByClassName("km")[1] as HTMLInputElement;
    el.innerText = this.speed.toString();
    el2.innerText = this.speed.toString() + " MBPS";
}


}

