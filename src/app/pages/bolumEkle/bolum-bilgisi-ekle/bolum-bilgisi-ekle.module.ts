import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolumBilgisiEkleComponent } from './bolum-bilgisi-ekle.component';
import { BolumuBilgisiEkleRoutingModule } from './bolum-bilgisi-ekle.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BolumuBilgisiEkleRoutingModule,
    FormsModule
  ],
  declarations: [BolumBilgisiEkleComponent]
})
export class BolumbilgisiEkleModule{}