import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuksekLisansBolumuEkleRoutingModule } from './yuksek-lisans-bolumu-ekle-routing.module';
import { YuksekLisansBolumuEkleComponent } from './yuksek-lisans-bolumu-ekle.component';


@NgModule({
  imports: [
    CommonModule,
    YuksekLisansBolumuEkleRoutingModule
  ],
  declarations: [YuksekLisansBolumuEkleComponent]
})
export class yuksekLisansBolumuEkleModule{}