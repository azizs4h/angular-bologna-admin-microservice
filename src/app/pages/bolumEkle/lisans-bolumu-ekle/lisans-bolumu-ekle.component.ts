import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/httpservisleri/get-servis/get-service.service';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-lisans-bolumu-ekle',
  templateUrl: './lisans-bolumu-ekle.component.html',
  styleUrls: ['./lisans-bolumu-ekle.component.css']
})
export class LisansBolumuEkleComponent implements OnInit {
  birimlistesi = [];
  constructor(public getveri:GetService) { }
  
  ngOnInit(): void {
    this.getveri.getData(globals.apiURL+"university/type/fakulte").subscribe(
      response => this.setVeri(response),
      error=> console.error(error)
    ); 
  }
  setVeri(response: any){
    this.birimlistesi = response;
  }
}
