import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LisansBolumuEkleRoutingModule } from './lisans-bolum-ekle-routing.module';
import { LisansBolumuEkleComponent } from './lisans-bolumu-ekle.component';


@NgModule({
  imports: [
    CommonModule,
    LisansBolumuEkleRoutingModule
  ],
  declarations: [LisansBolumuEkleComponent]
})
export class LisansBolumuEkleModule{}