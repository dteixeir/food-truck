import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { IPromise } from 'angular';
import { Observable } from 'rxjs';

@Injectable()
export class JwtHelper {
  private jwtHelper;
  // private http: HttpClient;

  constructor(
    private http: HttpClient
  ) {
    // this.http = new HttpClient();
    this.jwtHelper = new JwtHelperService();
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  decodeToken(): any {
    const token = this.getToken();
    const decodedToken = token != null ? this.jwtHelper.decodeToken(token) : null;

    return decodedToken;
  }

  getTokenExpirationDate(): Date {
    const decodedToken = this.decodeToken();

    if (decodedToken.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }

  isTokenExpired(): boolean {
    const date = this.getTokenExpirationDate();
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  public hasClaim(claimName: string): Observable<boolean> {
    return this.http.get(`${environment.api}/auth/hasclaim?claimname=${claimName}`)
      .pipe(map(res => res == true));
  }
}