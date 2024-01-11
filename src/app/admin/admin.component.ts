import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

//   imagePath: any;

//   constructor(private sanitizer: DomSanitizer) {}

//   onFileSelected(event: Event) {
//     const input = event.target as HTMLInputElement;

//     if (!input.files?.length) return;

//     const file = input.files[0];

//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const base64String = btoa(reader.result as string);
//       this.sanitizeImage(base64String);
//     };

//     reader.readAsBinaryString(file);
//   }

//   sanitizeImage(base64String: string) {
//     this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${base64String}`);
//   }

//   uploadImage(base64String: string) {
//     // Implement your logic to upload the image here.
//     // For example, you can send the base64String to an API.
//     console.log('Uploading image:', base64String);
//   }
// 
}
