import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-simplexmodel',
  standalone: true,
  imports: [MatProgressSpinner, MatFormField, MatLabel, MatInput, NgIf],
  templateUrl: './simplexmodel.component.html',
  styleUrl: './simplexmodel.component.scss'
})
export class SimplexmodelComponent implements OnInit {
  githubUrl = "https://raw.githubusercontent.com/TheFirePanel/SimplexModelChecker/main"
  categories: any;
  devices: {category: string, model: string}[] = [];
  ready = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.getCategories()
  }

  getCategories() {
    this.http.get(`${this.githubUrl}/categories.json`).subscribe({
      next: (res: any) => {
        this.categories = res.categories
        this.getDevices()
      },
      error: () => {
        console.error("Unable to fetch categories!")
      }
    })
  }

  getDevices() {
    let completed = 0;

    for (let c in this.categories) {
      this.http.get(`${this.githubUrl}/${this.categories[c]}.json`).subscribe({
        next: (res: any) => {
          for (let d in res.devices) {
            this.devices.push({
              category: this.categories[c],
              model: res.devices[d]
            })
          }

          completed++

          if (completed == this.categories.length)
            this.ready = true
        },
        error: () => {
          console.error(`Unable to fetch devies for ${this.categories[c]}`);
          completed++;

          if (completed == this.categories.length)
            this.ready = true
        }
      })
    }
  }
}
