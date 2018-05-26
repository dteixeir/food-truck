import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {
        
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        });
        
        // this is mutating the request/Observable to redirect?
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {

            }, (error: Error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        // redirect back to login if 401 received.
                        this.router.navigateByUrl('/login');
                    }
                }
            })
        );
    }
}