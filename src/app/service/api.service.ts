import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
 providedIn:"root"
})

export class ApiService{
 constructor(private http: HttpClient){}

// API fetch data from our endpoint
 getApi(endpointUrl:string): Observable<any>{
    // this.http.get(endpointUrl)
    const response = this.http.get(endpointUrl).pipe(
      map((res: any) => res)
    )
    return response;
 }
}