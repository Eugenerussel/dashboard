import { Routes } from '@angular/router';
import { DailyOpsComponent } from './daily-ops/daily-ops.component';

export const routes: Routes = [
    { path: 'dashboard', component: DailyOpsComponent },
  { path: '**', redirectTo: 'dashboard' }
];
