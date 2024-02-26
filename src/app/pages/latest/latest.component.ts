import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [NgIf],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})
export class LatestComponent implements OnInit {
  latestVideo: {embedUrl: SafeResourceUrl} | undefined;

  constructor(private sanatizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLatestVideo();
  }

  getLatestVideo() {
    this.latestVideo = {
      embedUrl: this.sanatizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed?listType=playlist&list=UULFOxmo0LNmiKT_RitieZoPIQ`)
    }
  }
}
