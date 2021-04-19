import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private http: HttpClient) {}
/*
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
*/
  public postData (url:string, data:any) {
    return this.http.post<any>(url,data);//ekstra olarak http options'u gönder (url,data,httpOptions) 
  }

}
