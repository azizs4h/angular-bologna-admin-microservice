import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YuksekLisansBirimiEkleComponent } from './yuksek-lisans-birimi-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: YuksekLisansBirimiEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YuksekLisansBirimiEkleRoutingModule{ }

