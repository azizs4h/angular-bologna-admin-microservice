import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnLisansBirimiEkleComponent } from './on-lisans-birimi-ekle.component';
import { OnLisansBirimiEkleRoutingModule } from './on-lisans-birimi-ekle-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    OnLisansBirimiEkleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OnLisansBirimiEkleComponent]
})
export class OnLisansBirimiEkleModule{}