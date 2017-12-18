import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';

import { FileService } from './file/file.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    AsyncLocalStorageModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
