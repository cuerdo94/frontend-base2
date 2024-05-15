import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', loadChildren: () => import('./productos/app.routes').then(m => m.routes) },

];
