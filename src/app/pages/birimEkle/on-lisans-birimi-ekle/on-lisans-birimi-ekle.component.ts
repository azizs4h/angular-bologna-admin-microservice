import { Component, OnInit } from '@angular/core';
import { Birim } from '../Birim';
import { PostService } from 'src/app/httpservisleri/post-servis/post-servis.service';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-on-lisans-birimi-ekle',
  templateUrl: './on-lisans-birimi-ekle.component.html',
  styleUrls: ['./on-lisans-birimi-ekle.component.css']
})
export class OnLisansBirimiEkleComponent implements OnInit {

  birim:Birim;
  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.birim = new Birim("","","","yuksekokul");
  }
  gonder(){
    console.log("neyi başaramadın aq");
    this.post.postData(globals.apiURL+"university",this.birim)
    .subscribe(
      response => console.log("gitti", response),
      error => console.log("başaramadık abi",error)
      );
  }

}
