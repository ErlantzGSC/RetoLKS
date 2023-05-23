import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListadoRaeeComponent } from './pages/listado-raee/listado-raee.component';
import { RaeeTableComponent } from './components/raee-table/raee-table.component';
import { RaeeProductoComponent } from './pages/raeepage/raeeproducto.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { RaeeRoutingModule } from './raee-routing.module';



@NgModule({
  declarations: [
    ListadoRaeeComponent,
    RaeeProductoComponent,
    RaeeTableComponent


  ],
  imports: [
    CommonModule,
    RaeeRoutingModule,
    SharedModule,

    MatPaginatorModule,
    MatTableModule,
    MatIconModule,


    RouterModule,
    MatPaginatorModule,





  ],
})
export class RaeeModule { }
