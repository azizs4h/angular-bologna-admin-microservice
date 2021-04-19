import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnLisansBirimiEkleComponent } from './on-lisans-birimi-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: OnLisansBirimiEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnLisansBirimiEkleRoutingModule{ }

