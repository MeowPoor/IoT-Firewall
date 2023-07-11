import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {

  constructor() { }

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
      },
    },
  ];

  setResult(ev:any) {
    
  }
}
