import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.page.html',
  styleUrls: ['./diagnosis.page.scss'],
})
export class DiagnosisPage implements OnInit {

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

