import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class FileService {

  constructor(private localStorage: AsyncLocalStorage) { }

  list() {
    return this.localStorage.getItem<string[]>('files');
  }

  add(files, file) {
    files.push(file);
    return this.localStorage.setItem('files', files);
  }

  delete(files, file) {
    files.splice(files.indexOf(file), 1);
    return this.localStorage.setItem('files', files);
  }

}
