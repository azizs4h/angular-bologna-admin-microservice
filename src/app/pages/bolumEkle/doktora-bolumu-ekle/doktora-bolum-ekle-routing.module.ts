import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoktoraBolumuEkleComponent } from './doktora-bolumu-ekle.component';


const routes: Routes = [
  {
    path: '',
    component: DoktoraBolumuEkleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoktoraBolumuEkleRoutingModule{ }

