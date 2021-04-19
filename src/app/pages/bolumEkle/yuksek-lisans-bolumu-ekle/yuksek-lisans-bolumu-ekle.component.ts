import { Component, OnInit } from '@angular/core';
import { globals } from 'src/app/globals';
import { GetService } from 'src/app/httpservisleri/get-servis/get-service.service';

@Component({
  selector: 'app-yuksek-lisans-bolumu-ekle',
  templateUrl: './yuksek-lisans-bolumu-ekle.component.html',
  styleUrls: ['./yuksek-lisans-bolumu-ekle.component.css']
})
export class YuksekLisansBolumuEkleComponent implements OnInit {

  birimlistesi = [];
  constructor(public getveri:GetService) { }
  
  ngOnInit(): void {
    this.getveri.getData(globals.apiURL+"university/type/enstitu_yl").subscribe(
      response => this.setVeri(response),
      error=> console.error(error)
    ); 
  }
  setVeri(response: any){
    this.birimlistesi = response;
  }

}
