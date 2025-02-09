import { Routes } from '@angular/router';
import { DailyOpsComponent } from './daily-ops/daily-ops.component';
import {loadRemoteModule} from '@angular-architects/module-federation'

export const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DailyOpsComponent
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
