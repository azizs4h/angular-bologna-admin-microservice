import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date:number;
  constructor() { }

  ngOnInit(): void {
    let now:Date= new Date();
    this.date = now.getFullYear(); 
  }

}
