import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from "@auth0/auth0-angular";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const idToken = JSON.parse(<string>localStorage.getItem('id_token'));
    if (idToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });
    } else {
      this.auth.idTokenClaims$.subscribe(claims => {
        request = request.clone({
          setHeaders: {
            Authorization: `${claims?.__raw}`
          }
        });
        localStorage.setItem('id_token', JSON.stringify(request.headers.get('Authorization')));
      });
    }

    // Pass the cloned request to the next interceptor or to the HttpHandler
    return next.handle(request);
  }
}
