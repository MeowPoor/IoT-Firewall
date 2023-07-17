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

  device:any;
  setOpen(isOpen: boolean, device:any) {
    this.isModalOpen = isOpen;
    this.device = device;
  }

  


  devices = [
    {hostName: "Swift SF314-43",
    deviceName: "Spudoow",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.23",
    macAddress: " 00:1B:63:84:45:E6",
    deviceStatus: "Online",
    portType: "Ethernet",
    onlineDuration: "36 hours 21 minutes",
    ipMode: "Dynamic"},
    {hostName: "Toshiba Laptop",
    deviceName: "Toshiba GWTC11-26BL",
    deviceModel: "Device Model: Laptop",
    ipAddress: "192.168.18.50",
    macAddress: "00:00:0A:BB:28:FC",
    deviceStatus: "Offline",
    portType: "Wi-Fi",
    onlineDuration: "16 hours 43 minutes",
    ipMode: "Dynamic"},
    {hostName: "Haier U1530EM",
    deviceName: "Gigabyte Gang",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.30",
    macAddress: "40:74:e0:91:1b:76",
    deviceStatus: "Online",
    portType: "Wi-Fi",
    onlineDuration: "43 hours 17 minutes",
    ipMode: "Dynamic"},
    {hostName: "Acer Aspire 3 A314-35-C733",
    deviceName: "Motherboard Mafia",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.33",
    macAddress: "48:a5:e7:4f:11:5f",
    deviceStatus: "Online",
    portType: "Wi-Fi",
    onlineDuration: "3hours 17 minutes",
    ipMode: "Dynamic"},

    {hostName: "printer01",
    deviceName: "HP LaserJet Pro MFP M227fdn",
    deviceModel: "M227fdn",
    ipAddress: "192.168.18.9",
    macAddress: "62:bd:4e:2d:fd:19",
    deviceStatus: "Online",
    portType: "Ethernet",
    onlineDuration: "17hours 21 minutes",
    ipMode: "Static"},
    {hostName: "Gateway GWNR51416-BK",
    deviceName: "Circuit Breakers",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.33",
    macAddress: "de:ee:94:22:59:6f",
    deviceStatus: "Online",
    portType: "Wi-Fi",
    onlineDuration: "2 hours 57 minutes ",
    ipMode: "Static"},
    {hostName: "Asus M415DA-BV1004W",
    deviceName: "Keyboard Fighter",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.9",
    macAddress: "a8:7e:ea:90:37:ec",
    deviceStatus: "Online",
    portType: "Wi-Fi",
    onlineDuration: "23hours 17 minutes",
    ipMode: "Dynamic"},
    {hostName: "Acer Extensa 15 EX215-23-R7NG",
    deviceName: "Laptop Leviathan",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.12",
    macAddress: "e4:47:90:6d:82:74",
    deviceStatus: "Online",
    portType: "Ethernet",
    onlineDuration: "5hours 43 minutes",
    ipMode: "Dynamic"},
    {hostName: "Chuwi Corebook XPro",
    deviceName: "Computing Crusader",
    deviceModel: "Laptop",
    ipAddress: "192.168.18.36",
    macAddress: "3a:76:00:1e:4d:85",
    deviceStatus: "Offline",
    portType: "WIFI",
    onlineDuration: "13hours 27 minutes",
    ipMode: "Dynamic"},
    {hostName: "phone01",
    deviceName: "Samsung Galaxy S20",
    deviceModel: "SM-G980F",
    ipAddress: "192.168.0.102",
    macAddress: "00:2F:9B:C4:7D:8E",
    deviceStatus: "Online",
    portType: "Wi-Fi",
    onlineDuration: "1 hour 15 minutes",
    ipMode: "Dynamic"},
  ]
}

