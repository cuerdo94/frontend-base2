import { Routes } from '@angular/router';
import { ProductoComponent } from './producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';


export const routes: Routes = [

  { path: '', component: ProductoComponent },
  { path: ':id', component: ProductoDetalleComponent },
];
