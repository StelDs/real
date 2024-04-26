import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileName = '';
  info: string = ''
  apartments: any[] = [];
  ngOnInit() {

  }
  splitimg(p : any): string {
    if(p === null) return "";
  const  s = p.split("\n");

  const html = s.reduce((acc:any, curr: any) => {
      return acc +'<img src= "'+curr+'"></img>';
    },0);

    return  html;
  }

  constructor(private http: HttpClient) {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      this.http.post("/api/v1/apartments/parse", formData).subscribe({
        next: (data: any): void => {
         this.apartments = data
          console.log(data);
          this.info = 'Файл успешно загружен'
        },
        error: err => {
          this.info = 'Файл не загружен'
        }
      });
    }
  }
}
