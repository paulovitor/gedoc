import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'upload/:id', component: UploadComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
