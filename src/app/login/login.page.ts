import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private router: Router) { }
  username = "admin";
  password= "admin123";
  uname:any;
  pword:any;
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging in',
      duration: 3000,
    });

    await loading.present();
  }
  redirectToTargetPage() {
    this.router.navigate(['/home']);
    alert("Logged in Successfully");
  }

  async ngOnInit() {
    
  }

  login(){

    if(this.uname === this.username && this.password == this.pword){
      this.showLoading();
      setTimeout(() => {
        this.redirectToTargetPage();
      }, 3000); // Adjust the delay as needed
      
    }else{
      alert("Username or password is invalid.");
    }
   
  }

}
