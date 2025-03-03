import { Routes } from '@angular/router';
import { DailyOpsComponent } from './daily-ops/daily-ops.component';
import {loadRemoteModule} from '@angular-architects/module-federation'
import { AuthGuard } from './guard/auth-guard';

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
    path:'login',
    loadChildren: () => loadRemoteModule({
        //remoteEntry: 'https://your-s3-bucket-name.s3.amazonaws.com/remoteEntry.js',
        remoteEntry: 'http://localhost:8080/remoteEntry.js',
        type: 'module',
        exposedModule: './routes'
    }).then(m => m.routes)
    .catch(err => console.log(err))
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
