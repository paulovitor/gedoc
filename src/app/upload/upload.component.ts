import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../file/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private files: string[];

  constructor(private service: FileService, private router: Router) { }

  ngOnInit() {
    this.service.list()
      .subscribe(files => {
        if (files == null) {
          files = [];
        }
        this.files = files;
      }, erro => console.log(erro));
  }

  preview(event) {
    event.preventDefault();
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.service.add(this.files, file.name).subscribe(() => {
        console.log('Adicionado com sucesso!');
        this.router.navigate(['']);
      }, erro => console.log(erro));
    }
  }

}
