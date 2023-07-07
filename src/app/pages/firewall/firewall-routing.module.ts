import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirewallPage } from './firewall.page';

const routes: Routes = [
  {
    path: '',
    component: FirewallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirewallPageRoutingModule {}
