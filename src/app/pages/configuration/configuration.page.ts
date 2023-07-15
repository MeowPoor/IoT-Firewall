import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  actions = [
    {value:'Block'},
    {value:'Unblock'}
  ]

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
      routerLink:'/login-loader',
      text: 'OK',
      role: 'confirm',
      handler: () => {
        //yes on alert
      },
    },
  ];

  setResult(ev:any) {
    
  }

  isModalOpen = false;


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

