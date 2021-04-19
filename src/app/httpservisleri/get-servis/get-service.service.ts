import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public getData(url:string){
    this.showSpinner.next(true);
    return this.http.get<any>(url).pipe(
      tap(
        response => this.showSpinner.next(false),
          (error: any) => this.showSpinner.next(false)
      )
    );
 }
}
