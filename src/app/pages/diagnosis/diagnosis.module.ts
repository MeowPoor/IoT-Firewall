import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosisPageRoutingModule } from './diagnosis-routing.module';

import { DiagnosisPage } from './diagnosis.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Also import this
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosisPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false
  
    }),
  ],
  declarations: [DiagnosisPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DiagnosisPageModule {}
