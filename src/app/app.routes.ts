import { Routes } from '@angular/router';
import { DailyOpsComponent } from './daily-ops/daily-ops.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard/1', pathMatch: 'full' },  // Default to Dash 1
  { path: 'dashboard/:id', component: DailyOpsComponent }, // Route for Dashboard component
];
