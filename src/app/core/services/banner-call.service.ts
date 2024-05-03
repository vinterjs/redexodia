import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../interfaces/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerCallService {

  constructor(private http:HttpClient) { }

  
  // getBanner(): Observable<Banner>{
  //   //return this.http.get<Banner>(`pokemon?limit=100000&offset=0`)
  // }
}
