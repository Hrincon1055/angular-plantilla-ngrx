import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as actionsAuth from '../store/authStore/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _store: Store<AppState>) {}
  public registerUser(body: any): Observable<any> {
    return this._http.post('http://localhost:4000/api/auth/new', body);
  }
  public loginUser(body: any): Observable<any> {
    return this._http.post<any>('http://localhost:4000/api/auth/', body);
  }
  public logoutUser() {
    localStorage.removeItem('user');
    console.log('auth.service LINE 16 =>', 'Cerrando sesion');
  }
  public renewTokenUser(token: string): Observable<any> {
    return this._http.get('http://localhost:4000/api/auth/renew', {
      headers: {
        'x-token': token,
      },
    });
  }
  public isAuth(): Observable<boolean> {
    let userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    if (userLocalStorage.hasOwnProperty('token')) {
      return this.renewTokenUser(userLocalStorage.token).pipe(
        map(() => true),
        catchError(() => of(false))
      );
    } else {
      return of(false);
    }
  }
}
