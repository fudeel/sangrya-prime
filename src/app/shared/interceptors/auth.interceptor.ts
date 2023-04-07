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
    const idToken = localStorage.getItem('id_token');

    // Clone the request and add the Authorization header with the id_token
    if (idToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });
    }

    // Pass the cloned request to the next interceptor or to the HttpHandler
    return next.handle(request);
  }
}
