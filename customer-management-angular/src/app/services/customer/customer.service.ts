import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = environment.BASE_URL;

  private _autoRefresh$ = new Subject();

  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient) {}

  getAllCustomer(page?: number): Observable<any> {
    if (page) {
      return this.http.get(
        `${this.baseUrl}/${environment.CUSTMOER}?pageNo=${page}`
      );
    }
    return this.http.get(`${this.baseUrl}/${environment.CUSTMOER}`);
  }

  getCustomerById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${environment.CUSTMOER}/${id}`);
  }

  addCustomer(customer: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/${environment.CUSTMOER}`, customer, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')}`
        ),
      })
      .pipe(
        tap((data) => {
          console.log(data);
          this._autoRefresh$.next(null);
        })
      );
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/${environment.CUSTMOER}/${id}`, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')}`
        ),
      })
      .pipe(
        tap((data) => {
          console.log('Deleted response ', data);
          this._autoRefresh$.next(null);
        })
      );
  }

  upadteCustomer(id: any, customer: any): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/${environment.CUSTMOER}/${id}`, customer, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')}`
        ),
      })
      .pipe(
        tap((data) => {
          console.log('Deleted response ', data);
          this._autoRefresh$.next(null);
        })
      );
  }
}
