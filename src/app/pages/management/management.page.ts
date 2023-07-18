import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  handlerMessage = '';
  roleMessage = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        //cancel on alert
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        //yes on alert
        this.showLoading();
        setTimeout(() => {
          alert("Applied Successfully");
        }, 3000); // Adjust the delay as needed
      },
    },
  ];

  setResult(ev:any) {
    
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Applying changes',
      duration: 3000,
    });

    await loading.present();
  }
  redirectToTargetPage() {
    this.router.navigate(['/home']);
    alert("Logged in Successfully");
  }
}
