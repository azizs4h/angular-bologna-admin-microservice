import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolumBilgisiEkleComponent } from './bolum-bilgisi-ekle.component';

const routes: Routes = [
  {
    path: '',
    component: BolumBilgisiEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolumuBilgisiEkleRoutingModule{ }

