import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './pages/_layout/layout.component';


export const routes: Routes = [
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/main.module').then((m) => m.MainModule),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]

  },
  { path: '**', redirectTo: 'error/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
