import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/httpservisleri/get-servis/get-service.service';
import { globals } from 'src/app/globals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anadal',
  templateUrl: './anadal.component.html',
  styleUrls: ['./anadal.component.css']
})
export class AnadalComponent implements OnInit {
  majorDepartmentList : Array<any> ;
  universityId : number = 0;
  constructor( public getveri:GetService, private route: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.universityId = params['universityid'];
    });
    this.getveri.getData(globals.apiURL+"university/"+this.universityId+"/majordepartments").subscribe(
      response => this.majorDepartmentList=response,
      error=> console.error(error)
    ); 
  }
}
