import { Routes } from '@angular/router';
import { LatestComponent } from './pages/latest/latest.component';
import { HistoryComponent } from './pages/history/history.component';
import { AboutComponent } from './pages/about/about.component';
import { SimplexmodelComponent } from './pages/tools/simplexmodel/simplexmodel.component';

export const routes: Routes = [
  { path: '', component: LatestComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: SimplexmodelComponent}
];
