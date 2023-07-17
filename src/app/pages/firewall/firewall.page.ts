import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firewall',
  templateUrl: './firewall.page.html',
  styleUrls: ['./firewall.page.scss'],
})
export class FirewallPage implements OnInit {

  firewall:any;
  portScan:any;
  notification:any;
  passive:any;

  constructor() { }

  ngOnInit() {
  }

}
