import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnadalComponent } from './anadal.component';

const routes: Routes = [
  {
    path: '',
    component: AnadalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnadalRoutingModule{ }

