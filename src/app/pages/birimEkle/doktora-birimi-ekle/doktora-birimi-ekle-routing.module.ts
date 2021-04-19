import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoktoraBirimiEkleComponent } from './doktora-birimi-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: DoktoraBirimiEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoktoraBirimiEkleRoutingModule{ }

