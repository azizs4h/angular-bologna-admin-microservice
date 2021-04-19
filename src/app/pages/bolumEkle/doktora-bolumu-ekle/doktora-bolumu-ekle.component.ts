import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/httpservisleri/get-servis/get-service.service';
import { globals } from 'src/app/globals'

@Component({
  selector: 'app-doktora-bolumu-ekle',
  templateUrl: './doktora-bolumu-ekle.component.html',
  styleUrls: ['./doktora-bolumu-ekle.component.css']
})
export class DoktoraBolumuEkleComponent implements OnInit {
  birimlistesi = [];
  constructor(public getveri:GetService) { }
  
  ngOnInit(): void {
    this.getveri.getData(globals.apiURL+"university/type/enstitu_d").subscribe(
      response => this.setVeri(response),
      error=> console.error(error)
    ); 
  }
  setVeri(response: any){
    this.birimlistesi = response;
  }
}