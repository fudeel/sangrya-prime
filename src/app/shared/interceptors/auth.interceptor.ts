import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the id_token from localStorage
    const idToken = JSON.parse(<string>localStorage.getItem('id_token'));

    // Clone the request and add the Authorization header with the id_token
    if (idToken) {
      console.log('idToken: ', idToken);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });

      console.log(request.headers.get('Authorization'));
    }

    // Pass the cloned request to the next interceptor or to the HttpHandler
    return next.handle(request);
  }
}
