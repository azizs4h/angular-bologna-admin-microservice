import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/httpservisleri/post-servis/post-servis.service';
import { Birim } from '../Birim';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-doktora-birimi-ekle',
  templateUrl: './doktora-birimi-ekle.component.html',
  styleUrls: ['./doktora-birimi-ekle.component.css'],
})
export class DoktoraBirimiEkleComponent implements OnInit {
  birim:Birim;
  constructor(private post:PostService) { }

  ngOnInit(): void {
    this.birim = new Birim("","","","enstitu_d");
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
