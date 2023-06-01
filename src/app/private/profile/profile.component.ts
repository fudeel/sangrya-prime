import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {NgxImageCompressService} from "ngx-image-compress";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('pictureModal', {static: false}) pictureModal: any | undefined

  isUploadComplete = false;

  picURL: string | undefined;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  isImageUploading: boolean = false;
  isDiscarding: boolean = false;

  downloadURLSub: Subscription | undefined;
  taskSub: Subscription | undefined;
  formSub: Subscription | undefined;
  logoutSub: Subscription | undefined;
  authServiceSub: Subscription | any | undefined;
  deleteImageSub: Subscription | undefined;
  userProfile: any | undefined;
  userId: string | undefined;
  isLoading = false;
  picForm = this.fb.group({
    pic: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private imageCompress: NgxImageCompressService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onBasicUploadAuto(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  onEditPicture() {
    this.pictureModal?.present();
  }


  async uploadFile(event: any) {
    this.isImageUploading = true;
    const file = this.croppedImage;

    // Compress the image
    await this.imageCompress.compressFile(file, -1, 50, 98, 100, 100).then(img => {
      // Create a reference to the Firebase Storage bucket
      console.log('image compresss upload ready: ', img);
    });
  }





  ngOnDestroy() {
    this.downloadURLSub?.unsubscribe();
    this.taskSub?.unsubscribe();
    this.formSub?.unsubscribe();
    this.logoutSub?.unsubscribe();
    this.deleteImageSub?.unsubscribe();
  }

  protected readonly Number = Number;
}
