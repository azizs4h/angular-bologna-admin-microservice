import { Component, OnInit } from '@angular/core';
import { Birim } from '../Birim';
import { PostService } from 'src/app/httpservisleri/post-servis/post-servis.service';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-lisans-birimi-ekle',
  templateUrl: './lisans-birimi-ekle.component.html',
  styleUrls: ['./lisans-birimi-ekle.component.css']
})
export class LisansBirimiEkleComponent implements OnInit {

  birim:Birim;
  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.birim = new Birim("","","","fakulte");
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