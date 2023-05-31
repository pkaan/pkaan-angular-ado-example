import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { MatNativeDateModule } from '@angular/material/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CvComponent } from './cv/cv.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [ 
  { path: 'welcome', component: WelcomeComponent},
  { path: 'cv', component: CvComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    PdfViewerModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
