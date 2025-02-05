import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwayComponent } from './away/away.component';

export const routes: Routes = [
  { path: '**', title: 'Hacker News - Home', component: HomeComponent },
  { path: 'away', component: AwayComponent }
];
