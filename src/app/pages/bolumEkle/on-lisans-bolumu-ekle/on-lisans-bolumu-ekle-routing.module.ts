import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnLisansBolumuEkleComponent } from './on-lisans-bolumu-ekle.component';

const routes: Routes = [
  {
    path: '',
    component: OnLisansBolumuEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnLisansBolumuEkleRoutingModule{ }

