import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'temp',
    loadChildren: () => import('./temp/temp-module').then((m) => m.TempModule),
  },

   {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then((m) => m.AuthModule),
  },

  {
    path: '',
    redirectTo: 'temp',
    pathMatch: 'full',
  },


];
