import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InsertService {
  constructor(private http: HttpClient) {}
  
  submitData(url: string, data: any): Observable<any>{
    return this.http.post(url, data)
  }
}
