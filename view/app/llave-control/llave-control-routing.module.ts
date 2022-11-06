import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlaveControlPage } from './llave-control.page';

const routes: Routes = [
  {
    path: '',
    component: LlaveControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlaveControlPageRoutingModule {}
