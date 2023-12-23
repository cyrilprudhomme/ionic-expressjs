import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'setup',
        loadChildren: () =>
          import('../setup/setup.module').then((m) => m.SetupPageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'work',
        loadChildren: () => import('../work/work.module').then( m => m.WorkPageModule)
      },
      {
        path: 'project/:id',
        loadChildren: () =>
          import('../projectdetail/projectdetail.module').then(
            (m) => m.ProjectdetailPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
