import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirewallPageRoutingModule } from './firewall-routing.module';

import { FirewallPage } from './firewall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirewallPageRoutingModule
  ],
  declarations: [FirewallPage]
})
export class FirewallPageModule {}
