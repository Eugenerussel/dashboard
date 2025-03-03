import { Routes } from '@angular/router';
import { DailyOpsComponent } from './daily-ops/daily-ops.component';
import {loadRemoteModule} from '@angular-architects/module-federation'
import { AuthGuard } from './guard/auth-guard';
import { RedirectComponent } from './guard/RedirectComponent';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'dailyOperation/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dailyOperation/dashboard',
    component: DailyOpsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: RedirectComponent  // Triggers browser redirect
  },
  {
    path:'claims',
    loadChildren: () => loadRemoteModule({
      type:'module',
      remoteEntry:'http://localhost:4202/remoteEntry.js',
      exposedModule:'./routes',
    }).then(m => m.routes)
    .catch(err => console.log(err))
  },
  {
    path:'callCenter',
    loadChildren: () => loadRemoteModule({
      type:'module',
      remoteEntry:'http://localhost:4204/remoteEntry.js',
      exposedModule:'./routes',
    }).then(m => m.routes)
    .catch(err => console.log(err))
  },
  {
    path:'enrollment',
    loadChildren: () => loadRemoteModule({
      type:'module',
      remoteEntry:'http://localhost:4203/remoteEntry.js',
      exposedModule:'./routes',
    }).then(m => m.routes)
    .catch(err => console.log(err))
  }
];
