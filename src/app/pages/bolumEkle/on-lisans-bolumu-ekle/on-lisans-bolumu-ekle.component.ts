import { Component, OnInit } from '@angular/core';
import { globals } from 'src/app/globals';
import { GetService } from 'src/app/httpservisleri/get-servis/get-service.service';

@Component({
  selector: 'app-on-lisans-bolumu-ekle',
  templateUrl: './on-lisans-bolumu-ekle.component.html',
  styleUrls: ['./on-lisans-bolumu-ekle.component.css']
})
export class OnLisansBolumuEkleComponent implements OnInit {

  birimlistesi = [];
  constructor(public getveri:GetService) { }
  
  ngOnInit(): void {
    this.getveri.getData(globals.apiURL+"university/type/yuksekokul").subscribe(
      response => this.setVeri(response),
      error=> console.error(error)
    ); 
  }
  setVeri(response: any){
    this.birimlistesi = response;
  }
}
