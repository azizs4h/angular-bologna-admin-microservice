import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnLisansBolumuEkleComponent } from './on-lisans-bolumu-ekle.component';
import { OnLisansBolumuEkleRoutingModule } from './on-lisans-bolumu-ekle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OnLisansBolumuEkleRoutingModule
  ],
  declarations: [OnLisansBolumuEkleComponent]
})
export class OnLisansBolumuEkleModule{}