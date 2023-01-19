import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  private baseUrl = environment.BASE_URL;
  private loginUser = new BehaviorSubject<any | null>(null);
  getUser(): BehaviorSubject<any | null> {
    return this.loginUser;
  }
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public signIn(data: any) {
    return this.http
      .post(`${this.baseUrl}/${environment.USER_LOGIN}`, data)
      .pipe(
        tap((userDetails) => {
          console.log('Data ---- ', userDetails);
        })
      );
  }

  public signUp(data: any) {
    return this.http.post(
      `${this.baseUrl}/${environment.USER_REGISTRATION}`,
      data,
      { ...Option, responseType: 'text' }
    );
  }

  public setToStorage(data: any) {
    localStorage.setItem('token', data.accessToken);
  }
  // getting token from the local storage
  public get() {
    return localStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    localStorage.removeItem('token');
    sessionStorage.clear();
  }
  loggedStatus() {
    return this.get();
  }

  
  adminloggedIn() {
    this.getUserrDeatils().subscribe((user) => {
      console.log('User hello ', user.roles[0].name);
      if (user.roles[0].name == 'ROLE_ADMIN') {
        return true;
      } else {
        return false;
      }
    });
  }

  getUserrDeatils(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${environment.CURRENT_USER}`, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')}`
        ),
      })
      .pipe(
        tap((data) => {
          this.loginUser.next(data);
          console.log('current user', data);
        })
      );
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    this.getUserrDeatils().subscribe((user) => {
      console.log('User ', user);
      if (user) {
        return true;
      } else {
        return false;
      }
    });
    // console.log('isLoggedIn', token);
    return token !== null ? true : false;
  }

  private handleError(err: HttpErrorResponse): any {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return errorMessage;
  }
}
