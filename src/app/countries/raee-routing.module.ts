import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoRaeeComponent } from './pages/listado-raee/listado-raee.component';
import { RaeeProductoComponent } from './pages/raeepage/raeeproducto.component';

const routes: Routes = [
  {
    path: 'listadoRaee',
    component :ListadoRaeeComponent,
  },
  {
    path: 'listadoRaee/idLectura/:id',
    component: RaeeProductoComponent,
  },

  {
    path: '**',
    redirectTo: 'listadoRaee',
  },


]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class RaeeRoutingModule { }
