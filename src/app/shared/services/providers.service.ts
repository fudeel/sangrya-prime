import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private readonly http: HttpClient) { }

  getProviders() {
    return this.http.get(`${environment.customBackendUrl}/get-providers`).pipe();
  }

}
