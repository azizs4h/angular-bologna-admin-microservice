import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoktoraBirimiEkleComponent } from './doktora-birimi-ekle.component';
import { DoktoraBirimiEkleRoutingModule } from './doktora-birimi-ekle-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DoktoraBirimiEkleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DoktoraBirimiEkleComponent]
})
export class DoktoraBirimiEkleModule{}
// https://www.sunzala.com/blog-angular-cannot-bind-ngmodel-property/