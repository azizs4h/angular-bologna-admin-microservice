import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnadalComponent } from './anadal.component';
import { AnadalRoutingModule } from './anadal.routing.module';


@NgModule({
  imports: [
    CommonModule,
    AnadalRoutingModule,
    FormsModule
  ],
  declarations: [AnadalComponent]
})
export class AnadalModule{}