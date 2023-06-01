import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {FileUploadModule} from "primeng/fileupload";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FileUploadModule
  ],
  providers: [MessageService]
})
export class ProfileModule { }
