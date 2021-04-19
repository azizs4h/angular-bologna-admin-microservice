import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuksekLisansBirimiEkleComponent } from './yuksek-lisans-birimi-ekle.component';
import { YuksekLisansBirimiEkleRoutingModule } from './yuksek-lisans-birimi-ekle-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    YuksekLisansBirimiEkleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [YuksekLisansBirimiEkleComponent]
})
export class YuksekLisansBirimiEkleModule{}