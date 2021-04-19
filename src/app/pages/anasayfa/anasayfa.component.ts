import { Component, OnInit } from '@angular/core';
import hostname from './hostname.json';
@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log("host id => "+hostname.id);
  }

}
