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

  getAllJobs():Observable<any>{
    let headers = new HttpHeaders(
      {
  
      'secretKey': 'b35a4279-e049-4372-82ec-388a4b8543ae',
      // 'Authorization':'b35a4279-e049-4372-82ec-388a4b8543ae',
      'Content-Type':'application/json',
      'Accept':'*/*',
     }
     );
    let options = { headers: headers };
    let data = {};
    return this.http.post('https://api.parmgyat.net/api/JobRequirements/GetAll',data,options)
  }
}
