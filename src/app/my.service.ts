import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

  getItems(page: number, limit: number): Observable<any> {
    return this.http.get(`https://my-api.com/items?page=${page}&limit=${limit}`);
  }
}
