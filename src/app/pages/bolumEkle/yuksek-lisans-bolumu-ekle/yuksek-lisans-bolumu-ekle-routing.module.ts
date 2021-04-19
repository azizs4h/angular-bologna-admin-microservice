import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YuksekLisansBolumuEkleComponent } from './yuksek-lisans-bolumu-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: YuksekLisansBolumuEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YuksekLisansBolumuEkleRoutingModule{ }

