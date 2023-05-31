import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form',
  styleUrls: ['./cv.component.css'],
  template: `
  <mat-card-content>
  <mat-toolbar class="flexSpaceBetween">
    <a href="/welcome" style="color:white">Return</a>
  </mat-toolbar>
</mat-card-content>
<pdf-viewer
  [src]="pdfSrc"
  [original-size]="true"
  [render-text]="true"
  [rotation]="0"
  [show-all]="true"
  [fit-to-page]="false"
  [zoom]="1"
  [zoom-scale]="'page-width'"
  [stick-to-page]="true"
  [external-link-target]="'blank'"
  [autoresize]="true"
  [show-borders]="false"
  class="pdf-viewer"
></pdf-viewer>

  `
})


export class CvComponent {
  pdfSrc = "../../assets/peetu_kaan_cv.pdf";
}