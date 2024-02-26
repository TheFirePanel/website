import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTiktok, faThreads, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
config.autoAddCss = false;

import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, MatButton, MatIcon, RouterOutlet, RouterLink, NgIf, FontAwesomeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  expanded = false;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faThreads = faThreads;
  faYoutube = faYoutube;
  faDiscord = faDiscord;
}
