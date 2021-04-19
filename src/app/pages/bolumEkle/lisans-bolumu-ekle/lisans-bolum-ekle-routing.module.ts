import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LisansBolumuEkleComponent } from './lisans-bolumu-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: LisansBolumuEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LisansBolumuEkleRoutingModule{ }

