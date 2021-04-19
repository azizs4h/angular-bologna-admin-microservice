import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LisansBirimiEkleComponent } from './lisans-birimi-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: LisansBirimiEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LisansBirimiEkleRoutingModule{ }

