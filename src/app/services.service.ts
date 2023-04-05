import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
apiKey:string="SecretKey"
  constructor(private http: HttpClient) { }
 url='https://api.parmgyat.net/api/Components/GetComponentContentsTreeByName'

  getHome():Observable<any>{
    let headers = new HttpHeaders(
      {
  
      'secretKey': 'b35a4279-e049-4372-82ec-388a4b8543ae',
     }
     );
    let options = { headers: headers };
    let data = {};
    return this.http.get(`${this.url}/navbar`,options)
  }
  getComponent(componentName:string):Observable<any>{
    let headers = new HttpHeaders(
      {
  
      'secretKey': 'b35a4279-e049-4372-82ec-388a4b8543ae',
     }
     );
    let options = { headers: headers };
    let data = {};
    return this.http.get(`${this.url}/${componentName}`,options)
  }
}
