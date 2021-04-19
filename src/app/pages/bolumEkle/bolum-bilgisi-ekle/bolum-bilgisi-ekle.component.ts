import { Component, OnInit } from '@angular/core';
import { bolumBilgisi } from './bolum-bilgisi';
import { PostService } from 'src/app/httpservisleri/post-servis/post-servis.service';
import { globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bolum-bilgisi-ekle',
  templateUrl: './bolum-bilgisi-ekle.component.html',
  styleUrls: ['./bolum-bilgisi-ekle.component.css']
})
export class BolumBilgisiEkleComponent implements OnInit {
  bolumbilgisi:bolumBilgisi;
  tumbilgiler = {
    "major_department_id":0,
    "department_name":"",
    "department_about":{}
  };
  constructor(private post:PostService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.bolumbilgisi = new bolumBilgisi("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    this.tumbilgiler["department_about"] = this.bolumbilgisi ;

    this.route.params.subscribe(params => {
      this.tumbilgiler["major_department_id"] = params['id'];
    });
  }
  gonder(){
    console.log("neyi başaramadın aq");
    this.post.postData(globals.apiURL+"department",this.tumbilgiler)
    .subscribe(
      response => console.log("gitti", response),
      error => console.log("başaramadık abi",error)
      );
  }

}
