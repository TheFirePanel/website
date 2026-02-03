
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FormatSimplexResultPipe } from './format-simplex-result.pipe';

@Component({
    selector: 'app-simplexmodel',
    imports: [
    MatProgressSpinner,
    MatFormField,
    MatLabel,
    MatInput,
    FormatSimplexResultPipe
],
    templateUrl: './simplexmodel.component.html',
    styleUrl: './simplexmodel.component.scss'
})
export class SimplexmodelComponent implements OnInit {
  githubUrl =
    'https://raw.githubusercontent.com/TheFirePanel/SimplexModelChecker/main';
  categories: string[] = [];
  devices: { category: string; model: string }[] = [];
  device: { category: string; model: string } | undefined;
  ready = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get(`${this.githubUrl}/categories.json`).subscribe({
      next: (res: any) => {
        this.categories = res.categories;
        this.getDevices();
      },
      error: () => {
        console.error('Unable to fetch categories!');
      },
    });
  }

  getDevices() {
    let completed = 0;
    
    for (const c in this.categories) {
      this.http.get(`${this.githubUrl}/${this.categories[c]}.json`).subscribe({
        next: (res: any) => {
          for (const d in res.devices) {
            this.devices.push({
              category: this.categories[c],
              model: res.devices[d],
            });
          }

          completed++;

          if (completed == this.categories.length) this.ready = true;
        },
        error: () => {
          console.error(`Unable to fetch devies for ${this.categories[c]}`);
          completed++;

          if (completed == this.categories.length) this.ready = true;
        },
      });
    }
  }

  search(entry: any) {
    const device = this.devices.filter((value) => {
      return value.model === entry;
    });

    if (device.length == 1) this.device = device[0];
    else this.device = undefined;
  }

  getCategoryColor(category?: string): string {
    const colorMap: any = {
      freeRun: 'green',
      selectable: 'green',
      syncable: 'gold',
      smartSync: 'orange',
      addressable: 'red',
      es: 'red',
    };
    if (category) return colorMap[category] || 'inherit';
    else if (this.device?.category)
      return colorMap[this.device?.category] || 'inherit';
    else return 'inherit';
  }
}
