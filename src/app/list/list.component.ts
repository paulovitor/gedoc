import { Component, OnInit } from '@angular/core';
import { FileService } from '../file/file.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private files: string[];

  constructor(private service: FileService) {}

  ngOnInit() {
    this.service.list()
      .subscribe(files => this.files = files, erro => console.log(erro));
  }

  delete(file) {
    this.service.delete(this.files, file).subscribe(() => {
      console.log('Removido com sucesso!');
    });
  }

}
