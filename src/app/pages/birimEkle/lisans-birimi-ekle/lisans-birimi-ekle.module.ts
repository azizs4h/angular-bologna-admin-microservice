import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LisansBirimiEkleRoutingModule } from './lisans-birimi-ekle-routing.module';
import { LisansBirimiEkleComponent } from './lisans-birimi-ekle.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LisansBirimiEkleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LisansBirimiEkleComponent]
})
export class LisansBirimiEkleModule{}