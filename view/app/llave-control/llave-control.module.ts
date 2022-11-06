import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlaveControlPageRoutingModule } from './llave-control-routing.module';

import { LlaveControlPage } from './llave-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlaveControlPageRoutingModule
  ],
  declarations: [LlaveControlPage]
})
export class LlaveControlPageModule {}
