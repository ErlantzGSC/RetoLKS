import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'RAEE',
    loadChildren: () => import('./countries/raee.module').then(m =>m.RaeeModule)
  },
  {
    path: '**',
    redirectTo: 'RAEE'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
