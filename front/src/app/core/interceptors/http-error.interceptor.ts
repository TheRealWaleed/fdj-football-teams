import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          const error = err.error.message || err.statusText;

          if (err.error.statusCode === 404) {
            this.router.navigateByUrl('/404-not-found', {replaceUrl: true}).then();

            return EMPTY;
          }

          this.router.navigateByUrl('/500-server-error', {replaceUrl: true}).then();

          return throwError(error);
        })
      )
    ;
  }
}
