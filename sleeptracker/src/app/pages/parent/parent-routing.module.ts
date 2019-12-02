import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentPage } from './parent.page';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentPage,
    children: [
      { path: '', redirectTo: 'overnightsleep', pathMatch: 'full' },
      {
        path: 'overnightsleep',
        loadChildren: () => import('../overnightsleep/overnightsleep.module').then(m => m.OvernightsleepPageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
      },
      {
        path: 'viewdata',
        loadChildren: () => import('../viewdata/viewdata.module').then(m => m.ViewdataPageModule)
      },
      {
        path: 'share',
        loadChildren: () => import('../share/share.module').then(m => m.SharePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'parent/overnightsleep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentPageRoutingModule {}
