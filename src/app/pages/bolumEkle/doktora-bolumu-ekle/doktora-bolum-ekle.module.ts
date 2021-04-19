import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoktoraBolumuEkleComponent } from './doktora-bolumu-ekle.component';
import { DoktoraBolumuEkleRoutingModule } from './doktora-bolum-ekle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DoktoraBolumuEkleRoutingModule
  ],
  declarations: [DoktoraBolumuEkleComponent]
})
export class DoktoraBolumEkleModule{}