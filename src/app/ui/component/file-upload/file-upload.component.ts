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

  ngOnInit() {

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
          this.info = 'Файл успешно загружен'
        },
        error: err => {
          this.info = 'Файл не загружен'
        }
      });
    }
  }
}
