import { Component, OnInit, inject } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-latest',
    imports: [],
    templateUrl: './latest.component.html',
    styleUrl: './latest.component.scss'
})
export class LatestComponent implements OnInit {
  private sanatizer = inject(DomSanitizer);

  latestVideo: {embedUrl: SafeResourceUrl} | undefined;

  ngOnInit(): void {
    this.getLatestVideo();
  }

  getLatestVideo() {
    this.latestVideo = {
      embedUrl: this.sanatizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed?listType=playlist&list=UULFOxmo0LNmiKT_RitieZoPIQ`)
    }
  }
}
