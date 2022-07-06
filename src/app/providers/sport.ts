import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ApiService } from "../service/api.service";

@Injectable({
 providedIn:'root'
})

export class Sports {
 url: string = environment.BASE_URL;
 apiKey: string = environment.API_KEY;

 constructor(private apiService: ApiService){}

 retreiveSportServices(queryString: string): Observable<any>{
  let url = `${this.url}?key=${this.apiKey}`;
  url +=  queryString != '' ? `&q=${queryString}` : '';

  return this.apiService.getApi(url).pipe(
   map((res: any) => res)
  )
 }
}