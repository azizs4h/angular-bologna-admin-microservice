import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/httpservisleri/post-servis/post-servis.service';
import { Birim } from '../Birim';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-yuksek-lisans-birimi-ekle',
  templateUrl: './yuksek-lisans-birimi-ekle.component.html',
  styleUrls: ['./yuksek-lisans-birimi-ekle.component.css']
})
export class YuksekLisansBirimiEkleComponent implements OnInit {

  birim:Birim;
  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.birim = new Birim("","","","enstitu_yl");
  }
  gonder(){
    console.log("neyi başaramadın aq");
    this.post.postData(globals.apiURL+"university",this.birim)
    .subscribe(
      response => alert("Yüksek Lisans Bölümü Eklendi"),
      error => console.log("başaramadık abi",error)
      );
  }

}
