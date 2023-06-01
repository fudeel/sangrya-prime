import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private readonly httpClient: HttpClient) { }


  async uploadProfilePicture(event: any) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    return await this.httpClient.post('http://localhost:3000/upload', formData).toPromise();
  }
}
