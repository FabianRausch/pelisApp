import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { 
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse 
} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    /**
     * Constructor
     *
     * @param router Router
     * @param spinner NgxSpinnerService
     */
    constructor(
        private router: Router
    ) { }

    /**
     * Interceptor for catch every error on Authorization
     * and redirect to the login component
     * 
     * @param req HttpRequest
     * @param next HttpHandler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');
        if (token != null) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`
                }
            });
        } else {
            this.router.navigate(['/login']);
        }
        return next.handle(req).pipe( tap(() => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                    return;
                    }
                    this.router.navigate(['login']);
            }
        }));
    }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];